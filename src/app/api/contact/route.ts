import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, solutionType, message } = body

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       // sender Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your login password)
      },
    })

    const mailOptions = {
      from: `"Galaxy System Website" <${process.env.GMAIL_USER || "shiv.galaxysystem@gmail.com"}>`,
      to: process.env.GMAIL_RECEIVER || "shiv.galaxysystem@gmail.com",        // where consultations are received
      replyTo: email || undefined,
      subject: `New Consultation Request — ${name} | Galaxy System`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 0;">
          
          <!-- Header -->
          <div style="background: #0c1a29; padding: 32px 40px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 600; letter-spacing: 0.05em;">
              GALAXY SYSTEM
            </h1>
            <p style="color: #4B9DCD; font-size: 12px; margin: 6px 0 0; text-transform: uppercase; letter-spacing: 0.12em;">
              New Consultation Request
            </p>
          </div>

          <!-- Body -->
          <div style="background: #ffffff; padding: 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #e8f0f7;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Name</span><br/>
                  <span style="font-size: 16px; color: #0c1a29; font-weight: 600; margin-top: 4px; display: block;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #e8f0f7;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Phone</span><br/>
                  <span style="font-size: 16px; color: #0c1a29; font-weight: 600; margin-top: 4px; display: block;">
                    <a href="tel:${phone}" style="color: #4B9DCD; text-decoration: none;">${phone}</a>
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #e8f0f7;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Email</span><br/>
                  <span style="font-size: 16px; color: #0c1a29; margin-top: 4px; display: block;">
                    ${email ? `<a href="mailto:${email}" style="color: #4B9DCD; text-decoration: none;">${email}</a>` : "<span style='color:#94a3b8;'>Not provided</span>"}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #e8f0f7;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Solution Interest</span><br/>
                  <span style="font-size: 16px; color: #0c1a29; font-weight: 600; margin-top: 4px; display: block;">${solutionType}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 0;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Message</span><br/>
                  <span style="font-size: 15px; color: #475569; margin-top: 6px; display: block; line-height: 1.6;">
                    ${message || "<em style='color:#94a3b8;'>No message provided</em>"}
                  </span>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <div style="margin-top: 32px; padding: 20px; background: #eef5fa; border-left: 3px solid #4B9DCD;">
              <p style="margin: 0; font-size: 13px; color: #475569;">
                Reply to this email or call the customer at <strong><a href="tel:${phone}" style="color: #4B9DCD;">${phone}</a></strong> to schedule their consultation.
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #0c1a29; padding: 20px 40px; text-align: center;">
            <p style="color: #546880; font-size: 11px; margin: 0;">
              Galaxy System · Rajajinagar, Bengaluru · shiv.galaxysystem@gmail.com
            </p>
          </div>

        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 })
  }
}
