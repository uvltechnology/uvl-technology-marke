# Deployment Guide for hosting.com

## Project Overview

This project consists of two parts:
1. **Frontend** - Vite + React application (root folder)
2. **Backend** - Node.js/Express server (`Logica-Server/` folder)

---

## Frontend Deployment

### Step 1: Build the Frontend
```bash
npm install
npm run build
```

This creates a `dist/` folder with static files.

### Step 2: Upload to hosting.com

1. Log in to your hosting.com account
2. Navigate to **File Manager** or use **FTP/SFTP**
3. Upload the contents of the `dist/` folder to your `public_html/` directory (or the domain's root)

### Step 3: Configure Environment Variables

Before building, create a `.env` file in the root:
```env
VITE_API_URL=https://api.yourdomain.com
```

Replace with your actual backend URL.

### Step 4: Configure SPA Routing

For React Router to work, create/upload an `.htaccess` file in your `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Backend Deployment (Node.js)

### Option A: If hosting.com supports Node.js hosting

1. Navigate to **Node.js App** section in cPanel/hosting panel
2. Create a new Node.js application:
   - **Application root**: `Logica-Server`
   - **Application URL**: `api.yourdomain.com` or `yourdomain.com/api`
   - **Application startup file**: `index.js`
   - **Node.js version**: 18.x or higher

3. Upload the `Logica-Server/` folder to your hosting

4. Set environment variables in the Node.js panel:
   ```
   PORT=4000
   NODE_ENV=production
   CORS_ORIGIN=https://yourdomain.com
   SMTP_HOST=smtp.your-provider.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASS=your-password
   MAIL_FROM=noreply@yourdomain.com
   MAIL_TO=contact@yourdomain.com
   ```

5. Click **Run NPM Install** or SSH and run:
   ```bash
   cd ~/Logica-Server
   npm install --production
   ```

6. Start the application

### Option B: Using Passenger (if available)

Create `Logica-Server/app.js`:
```javascript
require('./index.js')
```

The Passenger will automatically detect and run it.

---

## File Structure on hosting.com

```
/home/username/
├── public_html/           # Frontend files (dist/ contents)
│   ├── index.html
│   ├── .htaccess
│   └── assets/
│       ├── index-*.js
│       ├── index-*.css
│       └── *.png, *.jpg
│
└── Logica-Server/         # Backend (or in a subdomain folder)
    ├── index.js
    ├── package.json
    ├── .env
    ├── controllers/
    ├── helpers/
    ├── middlewares/
    ├── routes/
    └── services/
```

---

## FTP/SFTP Upload Instructions

### Using FileZilla or similar:

1. **Host**: ftp.yourdomain.com (or provided FTP host)
2. **Username**: Your hosting.com FTP username
3. **Password**: Your FTP password
4. **Port**: 21 (FTP) or 22 (SFTP)

### Upload:
- `dist/*` → `public_html/`
- `Logica-Server/` → `/home/username/Logica-Server/`

---

## Post-Deployment Checklist

- [ ] Frontend loads at https://yourdomain.com
- [ ] All frontend routes work (test navigation)
- [ ] Backend health check: `https://api.yourdomain.com/health`
- [ ] Contact form works
- [ ] SSL certificates are configured
- [ ] CORS is properly configured

---

## Troubleshooting

### Frontend shows blank page
- Check browser console for errors
- Verify `.htaccess` is uploaded and working

### API calls fail
- Check CORS_ORIGIN matches your frontend domain
- Verify backend is running: visit `/health` endpoint
- Check environment variables are set

### Contact form not working
- Verify SMTP credentials in backend `.env`
- Check server logs for email errors
