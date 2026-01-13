# Logica Server

Small Express server for handling contact form submissions and sending email via SMTP (Nodemailer).

Quick start

```bash
cd Logica-Server
npm install
# copy .env.example -> .env and set SMTP credentials
node index.js
```

API
- POST `/api/contact` - accepts JSON { name, company, email, phone, systemNeeds }

Environment variables
See `.env.example`.

Notes
- Keep `.env` out of version control.
- For production, use a transactional email provider or app-passwords where required.
