import { Resend } from "resend"

let resendClient: Resend | null = null

function getResendClient() {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set")
    }
    resendClient = new Resend(apiKey)
  }
  return resendClient
}

export async function sendContactEmail(data: { name: string; email: string; message: string }) {
  const resend = getResendClient()

  return resend.emails.send({
    from: "noreply@codyrobertson.com",
    to: process.env.CONTACT_EMAIL || "cody@example.com",
    replyTo: data.email,
    subject: `New contact from ${data.name}`,
    text: `From: ${data.name} (${data.email})\n\n${data.message}`,
  })
}
