module.exports = function validateContact(req, res, next) {
  const { name, email, systemNeeds, company } = req.body || {}

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ ok: false, message: 'Name is required' })
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ ok: false, message: 'Valid email is required' })
  }

  if (!systemNeeds || typeof systemNeeds !== 'string' || systemNeeds.trim().length < 10) {
    return res.status(400).json({ ok: false, message: 'Please provide more details about your needs' })
  }

  // company optional but normalize
  req.body.company = company ? String(company).trim() : ''

  next()
}
