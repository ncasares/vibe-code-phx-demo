import { type NextRequest, NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate inputs
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Name must be between 2 and 100 characters" }, { status: 400 })
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    if (!message || message.length < 10 || message.length > 1000) {
      return NextResponse.json({ error: "Message must be between 10 and 1000 characters" }, { status: 400 })
    }

    // Send email
    const result = await sendContactEmail({ name, email, message })

    if (result.error) {
      console.error("[v0] Resend error:", result.error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("[v0] Error sending contact email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
