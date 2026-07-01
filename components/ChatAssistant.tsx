'use client'

import { useEffect, useRef, useState } from 'react'

interface Msg {
  role: 'user' | 'assistant'
  content: string
}

const GREETING: Msg = {
  role: 'assistant',
  content:
    "Namaste 🌿 I'm the Celestial Biolabs assistant. Ask me about our Ayurvedic formulations, ingredients, manufacturing, or becoming a distributor.",
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading, open])

  async function send() {
    const text = input.trim()
    if (!text || loading) return
    const next = [...messages, { role: 'user' as const, content: text }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            data.reply || 'Sorry, I ran into a problem. Please try again in a moment.',
        },
      ])
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: 'Sorry, I could not reach the assistant. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close assistant' : 'Open Celestial Biolabs assistant'}
        className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
        style={{
          background: 'linear-gradient(120deg, var(--accent), var(--accent-strong))',
          color: 'var(--on-accent)',
          boxShadow: 'var(--shadow-glow)',
        }}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-5 z-[60] flex w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border"
          style={{
            height: 'min(70vh, 560px)',
            background: 'var(--paper)',
            borderColor: 'var(--border)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
          >
            <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: 'rgba(255,255,255,0.18)' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21C12 13 7 8 4 6c0 8 3 13 8 15Zm0 0c0-8 5-13 8-15 0 8-3 13-8 15Z" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                Celestial Assistant
              </p>
              <p className="text-[11px] opacity-80">Ayurvedic products &amp; company info</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className="max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed"
                style={
                  m.role === 'user'
                    ? { marginLeft: 'auto', background: 'var(--accent)', color: 'var(--on-accent)', borderBottomRightRadius: 4 }
                    : { background: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--border)', borderBottomLeftRadius: 4 }
                }
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div
                className="max-w-[60%] rounded-2xl px-3.5 py-3 text-sm"
                style={{ background: 'var(--surface)', color: 'var(--secondary)', border: '1px solid var(--border)' }}
              >
                <span className="inline-flex gap-1">
                  <span className="dot-typing" />
                  <span className="dot-typing" style={{ animationDelay: '0.2s' }} />
                  <span className="dot-typing" style={{ animationDelay: '0.4s' }} />
                </span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t p-3" style={{ borderColor: 'var(--border)' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') send() }}
              placeholder="Ask about our products…"
              className="flex-1 text-sm"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '0.6rem 0.75rem', color: 'var(--ink)' }}
              disabled={loading}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg disabled:opacity-50"
              style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
