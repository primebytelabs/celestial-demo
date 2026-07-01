import { NextResponse } from 'next/server'
import {
  company,
  proprietaryProducts,
  productCategories,
  expertise,
  strengths,
  sourcedHerbs,
  investorLink,
} from '@/lib/content'

const KEY = process.env.GEMINI_API_KEY
const MODEL = 'gemini-3.5-flash'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

// Build a knowledge base from the site's own content (single source of truth).
function buildKnowledge(): string {
  const products = proprietaryProducts
    .map(
      (p) =>
        `- ${p.name} (${p.form}) — ${p.description}${
          p.keyIngredients ? ` Key herbs: ${p.keyIngredients.join(', ')}.` : ''
        }`
    )
    .join('\n')
  const cats = productCategories.map((c) => `- ${c.label}: ${c.description}`).join('\n')
  const exp = expertise.map((e) => `- ${e.title}: ${e.body}`).join('\n')
  const pillars = strengths.map((s) => `- ${s.title}: ${s.body}`).join('\n')
  const herbs = sourcedHerbs
    .map((h) => `- ${h.name} (${h.botanicalName}): ${h.action}. ${h.description}`)
    .join('\n')

  return [
    `COMPANY: ${company.legalName}. Founded ${company.founded}. Headquarters: ${company.hq}.`,
    `Registered office: ${company.registeredOffice}.`,
    `CIN: ${company.cin}. ISIN: ${company.isin}. BSE scrip: ${company.bseScrip} (symbol ${company.bseSymbol}).`,
    `Investor info: ${investorLink.label} — ${investorLink.url}`,
    ``,
    `PRODUCTS:\n${products}`,
    ``,
    `PRODUCT CATEGORIES:\n${cats}`,
    ``,
    `EXPERTISE:\n${exp}`,
    ``,
    `WHY CHOOSE US:\n${pillars}`,
    ``,
    `KEY BOTANICALS WE SOURCE:\n${herbs}`,
  ].join('\n')
}

const SYSTEM_INSTRUCTION = `You are the official virtual assistant for ${company.legalName}, an Ayurvedic and pharmaceutical manufacturing company based in Hyderabad, India.

STRICT SCOPE — you ONLY discuss Celestial Biolabs Limited and topics directly about it: its products and formulations, ingredients/botanicals, manufacturing, quality & compliance, research, distribution/partnership, and company/investor details. Use ONLY the KNOWLEDGE below as your source of truth.

RULES:
1. If the user asks anything NOT about Celestial Biolabs or its products (e.g. general knowledge, other companies, coding, math, news, personal advice), politely decline in ONE short sentence and steer back — for example: "I'm here to help with Celestial Biolabs and our Ayurvedic products — what would you like to know?" Do not answer the off-topic question.
2. NEVER invent products, ingredients, certifications, prices, dosages, or facts that are not in the KNOWLEDGE. If something isn't covered, say you don't have that detail and suggest contacting the company via the Distributors/Contact page.
3. Do NOT provide medical diagnosis or dosage instructions. For health guidance, recommend consulting a qualified Ayurvedic practitioner or physician.
4. Be warm, concise, and professional. Prefer short answers (2–5 sentences) unless asked for detail.

KNOWLEDGE:
${buildKnowledge()}`

interface ClientMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(req: Request) {
  if (!KEY) {
    return NextResponse.json({ error: 'The assistant is not configured.' }, { status: 500 })
  }

  let messages: ClientMessage[] = []
  try {
    const body = await req.json()
    messages = Array.isArray(body?.messages) ? body.messages : []
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const contents = messages
    .filter((m) => m && typeof m.content === 'string' && m.content.trim())
    .slice(-12)
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content.slice(0, 2000) }],
    }))

  if (contents.length === 0) {
    return NextResponse.json({ error: 'No message provided.' }, { status: 400 })
  }

  try {
    const res = await fetch(`${ENDPOINT}?key=${KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        contents,
        generationConfig: { temperature: 0.4, maxOutputTokens: 600, topP: 0.9 },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
        ],
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      // Quota/rate-limit → show a friendly in-chat message instead of an error state.
      if (res.status === 429) {
        return NextResponse.json({
          reply:
            "I'm receiving a lot of requests right now and can't answer this moment. Please try again shortly, or reach our team via the Distributors page.",
        })
      }
      return NextResponse.json(
        { error: 'The assistant is unavailable right now.', detail: detail.slice(0, 200) },
        { status: 502 }
      )
    }

    const data = await res.json()
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text).join('').trim() ||
      "Sorry, I couldn't find an answer to that. Please try rephrasing, or reach us via the Distributors page."

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json({ error: 'The assistant is unavailable right now.' }, { status: 502 })
  }
}
