const rateLimit = require('express-rate-limit')

// Basic rate limiter for contact submissions
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: parseInt(process.env.RATE_LIMIT_MAX || '6', 10), // max requests per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, message: 'Too many requests, please try again later.' }
})

module.exports = limiter
