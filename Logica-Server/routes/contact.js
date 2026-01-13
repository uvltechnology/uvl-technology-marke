const express = require('express')
const router = express.Router()

const rateLimiter = require('../middlewares/rateLimiter')
const validateContact = require('../middlewares/validateContact')
const contactController = require('../controllers/contactController')

// POST /api/contact
router.post('/', rateLimiter, validateContact, contactController.sendContact)

module.exports = router
