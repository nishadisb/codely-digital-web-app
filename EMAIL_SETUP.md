# Contact Form Email Setup Guide - EmailJS

## Overview

The contact form sends emails using **EmailJS** - a 100% client-side email service. No backend or server required! Works with any static hosting (GitHub Pages, Netlify, Vercel, etc.).

## Why EmailJS?

✅ **No backend needed** - Pure client-side solution  
✅ **Easy setup** - 5 minutes to configure  
✅ **Free tier** - 200 emails/month  
✅ **Works anywhere** - Any static hosting works  
✅ **Secure** - Domain restrictions prevent abuse  

---

## Setup Instructions

### Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for free
2. Verify your email address
3. You're ready to configure!

### Step 2: Add Email Service

1. Go to [Email Services](https://dashboard.emailjs.com/admin/integration)
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (easiest for testing)
   - **Outlook/Office365**
   - Or any other supported provider
4. Click **"Connect Account"** and follow the OAuth process
5. **Copy the Service ID** (looks like `service_xxxxxxx`) - you'll need this!

### Step 3: Create Email Template

1. Go to [Email Templates](https://dashboard.emailjs.com/admin/templates)
2. Click **"Create New Template"**
3. Replace the default template with this:

```
Subject: New Contact Form: {{message_type}} - {{from_name}}

Hello,

You have received a new contact form submission from the Codely website.

---
CONTACT DETAILS
---
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

---
INQUIRY TYPE
---
{{message_type}}

---

This message was sent from the Codely contact form.
Reply directly to this email to respond to {{from_name}} at {{from_email}}.

Best regards,
Codely Website
```

4. **Important Settings:**
   - **To Email**: `info@codely.com.au` (or your email)
   - **From Name**: `Codely Contact Form`
   - **Reply To**: `{{from_email}}` (allows replying directly to the sender)
   
5. Click **"Save"**
6. **Copy the Template ID** (looks like `template_xxxxxxx`) - you'll need this!

### Step 4: Get Your Public Key

1. Go to [Account → API Keys](https://dashboard.emailjs.com/admin/account)
2. Copy your **Public Key** (looks like a random string)

### Step 5: Configure Environment Variables

1. Open `.env.local` file in your project
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important**: Replace the placeholder values with your actual EmailJS credentials!

### Step 6: Test Locally

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Open the contact form in your browser
3. Fill out and submit the form
4. Check your email inbox (the one you configured in EmailJS)
5. You should receive the contact form submission!

---

## Deployment

### Works with ANY Static Host!

Since EmailJS is client-side, your app works with any hosting:

- ✅ **Vercel** - Just push to GitHub and deploy
- ✅ **Netlify** - Same, push and deploy
- ✅ **GitHub Pages** - Static hosting, works perfectly
- ✅ **Firebase Hosting** - Works great
- ✅ **Any other static host**

### Add Environment Variables (Production)

**For Vercel:**
1. Project Settings → Environment Variables
2. Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`

**For Netlify:**
1. Site Settings → Environment Variables → Add Variables
2. Add the same three variables

**For other hosts:**
- Some hosts support environment variables
- If not, you can hardcode the values in the code (they're public anyway, secured by domain restrictions)

---

## Security: Domain Restrictions

EmailJS keys are visible in the client code, but EmailJS protects you with domain restrictions:

1. Go to [Account → Security](https://dashboard.emailjs.com/admin/account)
2. Under **"Allowed Domains"**, add your domains:
   - For local testing: `localhost`
   - For production: `yourdomain.com`, `www.yourdomain.com`
3. This prevents others from using your EmailJS credentials on different domains

---

## Troubleshooting

### Error: "Failed to send message"

**Check these:**
- ✅ Verify all three environment variables are set correctly
- ✅ Service ID, Template ID, and Public Key match your EmailJS dashboard
- ✅ Email service is connected (check Email Services page)
- ✅ Template is saved and active

### Email not received

**Check these:**
- ✅ Check spam/junk folder
- ✅ Verify the "To Email" in your EmailJS template is correct
- ✅ Check EmailJS dashboard → History to see if the email was sent
- ✅ Make sure your email service (Gmail, etc.) is still connected

### Domain restriction error

**Fix:**
- ✅ Add your domain to Allowed Domains in EmailJS security settings
- ✅ For local development, make sure `localhost` is allowed
- ✅ For production, add your actual domain

### Rate limiting

EmailJS free tier limits:
- 200 emails/month
- No daily limit
- If you exceed, upgrade to a paid plan or wait for next month

---

## Email Template Customization

You can customize your email template in the EmailJS dashboard:

### Add HTML Styling

Instead of plain text, you can use HTML in your template:

```html
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h2 style="color: #006FEA;">New Contact Form Submission</h2>
  
  <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Inquiry:</strong> {{message_type}}</p>
  </div>
</div>
```

### Add Auto-Reply to User

Create a second template for user confirmation:

1. Create new template called "Contact Confirmation"
2. Set **To Email** to: `{{from_email}}`
3. Write a thank you message
4. Update Contact.tsx to send two emails (one to you, one to user)

---

## Features

✅ Pure client-side (no backend needed)  
✅ Works with any static hosting  
✅ Form validation (client-side)  
✅ Loading states and user feedback  
✅ Error handling  
✅ Reply-to header (replies go to sender)  
✅ Free 200 emails/month  
✅ Easy to test locally  

---

## Optional Enhancements

### Add reCAPTCHA Protection

EmailJS supports Google reCAPTCHA to prevent spam:

1. Get reCAPTCHA keys from Google
2. Add to your site
3. Configure in EmailJS dashboard

### Custom Email Templates

- Use HTML/CSS for beautiful emails
- Add company branding
- Include logos and images

### Track Submissions

- Check EmailJS dashboard for submission history
- See delivery status
- Monitor usage

### Multiple Recipients

In your EmailJS template, set multiple addresses:
```
To Email: info@codely.com.au, sales@codely.com.au
```

---

## Upgrade Options

If you need more than 200 emails/month:

- **Personal Plan**: $7/month - 1,000 emails
- **Professional**: $15/month - 5,000 emails
- **Enterprise**: Custom pricing

---

## Support

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Dashboard**: https://dashboard.emailjs.com/
- **Contact Support**: support@emailjs.com

---

## Summary

1. ✅ Sign up at EmailJS
2. ✅ Connect your email (Gmail, etc.)
3. ✅ Create email template
4. ✅ Copy Service ID, Template ID, Public Key
5. ✅ Add to `.env.local`
6. ✅ Test with `npm run dev`
7. ✅ Deploy anywhere!

That's it! No backend, no complex setup, just works! 🚀

## Setup Instructions

### 1. Get Resend API Key

1. Sign up for a free account at [resend.com](https://resend.com)
2. Verify your email address
3. Go to [API Keys](https://resend.com/api-keys)
4. Create a new API key
5. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables

#### For Local Development

1. Open `.env.local` file (already created)
2. Add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   RESEND_TO_EMAIL=info@codely.com.au
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

**Note**: For local testing, you can use `onboarding@resend.dev` as the `FROM` email. For production, you'll need to verify your own domain in Resend.

#### For Production (Vercel/Netlify)

Add the same environment variables in your deployment platform:

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add `RESEND_API_KEY`, `RESEND_TO_EMAIL`, and `RESEND_FROM_EMAIL`

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add the same variables

### 3. Local Development

#### Option 1: Using Vercel CLI (Recommended)

Install Vercel CLI globally:
```bash
npm install -g vercel
```

Run local development with serverless functions:
```bash
vercel dev
```

This will start the dev server with API routes working at `http://localhost:3000`

#### Option 2: Using only Vite (API calls won't work)

If you don't need to test the email functionality locally:
```bash
npm run dev
```

**Note**: The contact form will show network errors since the `/api/send-email` endpoint won't be available. You'll need to deploy to test the email functionality.

### 4. Deploy to Vercel

#### Easy Deployment:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables in project settings
6. Deploy!

#### Using Vercel CLI:

```bash
vercel login
vercel
```

Follow the prompts to deploy.

### 5. Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables in Site Settings
7. Deploy!

**Note**: For Netlify, you may need to create a `netlify.toml` file (optional, but recommended):

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "api"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

## Testing

### Test Email Sending

1. Fill out the contact form
2. Click "Send a message"
3. You should see a success message
4. Check your email inbox at the configured `RESEND_TO_EMAIL` address

### Troubleshooting

**"Network error" message:**
- Make sure you're running `vercel dev` (not just `npm run dev`)
- Check that `.env.local` has the correct API key

**"Failed to send email" message:**
- Verify your Resend API key is correct
- Check the browser console for detailed error messages
- In production, check Vercel/Netlify function logs

**Rate limiting:**
- The API has basic rate limiting (3 requests per minute per IP)
- If you hit the limit, wait 1 minute and try again

## Email Configuration

### Using Your Own Domain

To send emails from your own domain (e.g., `noreply@codely.com.au`):

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain
3. Add the required DNS records (Resend will provide these)
4. Verify the domain
5. Update `RESEND_FROM_EMAIL` to use your domain

### Customize Email Content

Edit `/api/send-email.ts` to customize:
- Email subject line
- Email body format
- Add HTML email templates
- Add CC/BCC recipients

## Security

- API keys are stored in environment variables (never in code)
- `.env.local` is git-ignored (never committed)
- Rate limiting prevents abuse
- Server-side validation prevents spam

## Features

✅ Sends email notifications for contact form submissions
✅ Rate limiting (3 requests/minute per IP)
✅ Form validation (client and server-side)
✅ Loading states and user feedback
✅ Error handling
✅ Reply-to header (replies go to the submitter)

## Next Steps (Optional)

- Add HTML email templates using [react-email](https://react.email)
- Add honeypot field for spam protection
- Integrate Google reCAPTCHA
- Add email confirmation to the user
- Log submissions to a database
- Create admin dashboard to view submissions
