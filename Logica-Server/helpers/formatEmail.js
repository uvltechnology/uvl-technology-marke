function escapeHtml(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildContactText({ name, company, email, phone, systemNeeds }) {
  return `Contact submission\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${systemNeeds}`
}

function buildContactHTML({ name, company, email, phone, systemNeeds }) {
  return `
    <div style="font-family:Helvetica,Arial,sans-serif;line-height:1.4;color:#111">
      <h2>New contact submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <hr />
      <h3>Message</h3>
      <p>${escapeHtml(systemNeeds).replace(/\n/g, '<br/>')}</p>
    </div>
  `
}

module.exports = { buildContactText, buildContactHTML }
