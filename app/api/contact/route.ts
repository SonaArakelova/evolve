
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const port = Number(process.env.SMTP_PORT) || 465
    const secure = port === 465

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${body.name}" <${body.email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${body.name}`,
      text: body.message,
      html: `<p><strong>Name:</strong> ${body.name}</p>
             <p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Message:</strong></p>
             <p>${body.message}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Mail send error:', error || error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API is running' })
}
