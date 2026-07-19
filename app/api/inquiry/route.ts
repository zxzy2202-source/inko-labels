import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Log inquiry to console for debugging
    console.log("[INKO Inquiry]", JSON.stringify(data, null, 2));

    // Send email notification via Resend
    // Requires RESEND_API_KEY environment variable to be set in Vercel
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 0;">
          <div style="background: #0F2744; padding: 24px 32px;">
            <h1 style="color: #E8A020; font-size: 22px; margin: 0; font-weight: 900; letter-spacing: 1px; text-transform: uppercase;">
              New Inquiry — INKO Custom Labels
            </h1>
          </div>
          <div style="padding: 32px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 140px; font-weight: bold;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 14px;">${data.name || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; font-weight: bold;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 14px;">${data.company || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; font-weight: bold;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 14px;"><a href="mailto:${data.email}" style="color: #E8A020;">${data.email || "—"}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; font-weight: bold;">Phone / WhatsApp</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 14px;">${data.phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; font-weight: bold;">Country</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 14px;">${data.country || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; font-weight: bold;">Product Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 14px;">${data.productType || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; font-weight: bold;">Quantity</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 14px;">${data.quantity || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 13px; font-weight: bold; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #1a1a2e; font-size: 14px; white-space: pre-wrap;">${data.message || "—"}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f0f0f0; padding: 16px 32px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Submitted via inkolabels.com · ${new Date().toUTCString()}
            </p>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: "INKO Inquiry <inquiry@inkolabels.com>",
        to: process.env.INQUIRY_TO_EMAIL || "info@inkolabels.com",
        replyTo: data.email,
        subject: `New B2B Inquiry from ${data.name || "Unknown"} — ${data.company || ""}`,
        html: emailHtml,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[INKO Inquiry Error]", err);
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
  }
}
