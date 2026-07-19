import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Log inquiry to console (replace with email service in production)
    console.log("[INKO Inquiry]", JSON.stringify(data, null, 2));
    // TODO: integrate Resend / Nodemailer / SendGrid here
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: 'inquiry@inkolabels.com', to: 'info@inkolabels.com', subject: `New Inquiry from ${data.name}`, html: `...` });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[INKO Inquiry Error]", err);
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
  }
}

