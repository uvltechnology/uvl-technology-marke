const mailService = require('../services/mailService')
const logger = require('../helpers/logger')

exports.sendContact = async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name,
      company: req.body.company || '',
      email: req.body.email,
      phone: req.body.phone || '',
      systemNeeds: req.body.systemNeeds
    }

    const info = await mailService.sendContactEmail(payload)
    logger.info('Contact email sent', { messageId: info && info.messageId })

    res.status(200).json({ ok: true })
  } catch (err) {
    next(err)
  }
}
