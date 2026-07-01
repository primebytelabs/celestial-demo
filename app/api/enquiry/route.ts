import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED_FIELDS = ["name", "company", "email", "phone", "location"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!data) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  for (const field of REQUIRED_FIELDS) {
    if (typeof data[field] !== "string" || (data[field] as string).trim() === "") {
      return NextResponse.json(
        { error: `${field} is required.` },
        { status: 400 },
      );
    }
  }

  if (!EMAIL_RE.test(data.email as string)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ENQUIRY_TO_EMAIL } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASS && ENQUIRY_TO_EMAIL) {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT ? Number(SMTP_PORT) : 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    try {
      await transport.sendMail({
        from: SMTP_USER,
        to: ENQUIRY_TO_EMAIL,
        replyTo: data.email as string,
        subject: `Distributor enquiry: ${data.company}`,
        text: Object.entries(data)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n"),
      });
    } catch {
      return NextResponse.json(
        { error: "Could not send the enquiry right now. Please try again shortly." },
        { status: 502 },
      );
    }
  } else {
    // SMTP_HOST / SMTP_USER / SMTP_PASS / ENQUIRY_TO_EMAIL are not set — log so the
    // flow is verifiable end-to-end in development. Set those env vars to deliver
    // enquiries to a real inbox in production.
    console.info("[enquiry] SMTP not configured, logging submission:", data);
  }

  return NextResponse.json({ ok: true });
}
