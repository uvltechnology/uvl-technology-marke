require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const contactRoute = require('./routes/contact')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '0.0.0.0'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const corsOrigin = process.env.CORS_ORIGIN || '*'
app.use(cors({ origin: corsOrigin }))

// Mount contact route
app.use('/api/contact', contactRoute)

// Health
app.get('/health', (req, res) => res.json({ ok: true, env: process.env.NODE_ENV || 'development' }))

// Error handler (must be last)
app.use(errorHandler)

app.listen(PORT, HOST, () => {
  console.log(`Logica Server listening on ${HOST}:${PORT}`)
})
