const nodemailer = require('nodemailer')
const { buildContactText, buildContactHTML } = require('../helpers/formatEmail')

const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10)
const SMTP_SECURE = (process.env.SMTP_SECURE || 'false') === 'true'
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const FROM_EMAIL = process.env.FROM_EMAIL
const TO_EMAIL = process.env.TO_EMAIL

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL || !TO_EMAIL) {
  console.warn('mailService: missing SMTP config in env — email sending will fail until configured')
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  // Enable protocol logging and debug output to help diagnose connection issues
  logger: true,
  debug: true,
  // Increase timeouts to allow slow networks or handshake delays
  connectionTimeout: parseInt(process.env.SMTP_CONNECTION_TIMEOUT || '30000', 10),
  greetingTimeout: parseInt(process.env.SMTP_GREETING_TIMEOUT || '30000', 10)
})

async function sendContactEmail(payload) {
  const subject = `Website Contact: ${payload.name}`
  const text = buildContactText(payload)
  const html = buildContactHTML(payload)

  const info = await transporter.sendMail({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject,
    text,
    html
  })

  return info
}

module.exports = { sendContactEmail }
