import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "zaid9khn@gmail.com",
      replyTo: email,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
