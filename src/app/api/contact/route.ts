import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server not configured for email" }, { status: 500 });
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Asif Portfolio <noreply@maxsolbiz.com>",
      to: [process.env.TO_EMAIL || "maxsolbiz@gmail.com"],
      replyTo: email,
      subject: `[Asif Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0E1A; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #C9A84C; margin: 0;">New Contact — Asif Portfolio</h2>
          </div>
          <div style="background: #111827; padding: 24px; border-radius: 0 0 8px 8px; color: #F8FAFC;">
            <p><strong style="color: #C9A84C;">Name:</strong> ${name}</p>
            <p><strong style="color: #C9A84C;">Email:</strong> ${email}</p>
            <p><strong style="color: #C9A84C;">Message:</strong></p>
            <p style="background: #1F2937; padding: 16px; border-radius: 6px; color: #D1D5DB;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
