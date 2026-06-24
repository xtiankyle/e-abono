require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// Rate limiter
const rateLimitMap = new Map();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (record.count >= RATE_LIMIT_MAX) return true;
  record.count += 1;
  return false;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetAt) rateLimitMap.delete(ip);
  }
}, 60 * 60 * 1000);

// Input length limits
const LIMITS = { name: 100, email: 254, comment: 2000 };

// URL blocker - only blocks actual URLs, not normal words
const URL_PATTERNS = [
  /https?:\/\//i,
  /ftp:\/\//i,
  /www\./i,
  /%3A%2F%2F/i,
  /\b(facebook|instagram|twitter|youtube|tiktok|linkedin|reddit|telegram|t\.me|bit\.ly|tinyurl)\.(com|net|org|me|ly)(\/\S*)?/i,
];

function containsLink(text) {
  return URL_PATTERNS.some((pattern) => pattern.test(text));
}

// Spam keyword filter
const SPAM_KEYWORDS = [
  'buy now', 'click here', 'free money', 'make money fast', 'earn from home',
  'casino', 'crypto investment', 'bitcoin', 'forex', 'limited offer', 'act now',
  'congratulations you won', 'you have been selected', 'send me your',
  'wire transfer', 'bank account', 'loan offer', 'weight loss', 'diet pills',
  'viagra', 'cialis', 'prescription drugs', 'seo service', 'increase traffic',
  'marketing service',
];

function containsSpam(text) {
  const lower = text.toLowerCase();
  return SPAM_KEYWORDS.some((kw) => lower.includes(kw));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getInitials(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildEmailHtml({ name, email, comment }) {
  const safeName    = escapeHtml(name);
  const safeEmail   = escapeHtml(email);
  const safeComment = escapeHtml(comment).replace(/\n/g, '<br>');
  const initials    = getInitials(name);
  const timestamp   = new Date().toLocaleString('en-PH', {
    timeZone: 'Asia/Manila',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0; padding:0; background-color:#eef0e6; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef0e6; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 6px 20px rgba(31,45,18,0.12);">
            <tr>
              <td style="padding:0; line-height:0; font-size:0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:#2f4a1e; width:34%; height:5px;">&nbsp;</td>
                    <td style="background-color:#7c9a3d; width:33%; height:5px;">&nbsp;</td>
                    <td style="background-color:#c9a227; width:33%; height:5px;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:#2f4a1e; background-image:linear-gradient(135deg, #2f4a1e, #5d7d34); padding:40px 40px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center">
                      <h1 style="margin:16px 0 0; color:#ffffff; font-size:25px; font-weight:700; letter-spacing:0.2px;">E-Abono</h1>
                      <p style="margin:5px 0 0; color:rgba(255,255,255,0.78); font-size:12px; letter-spacing:0.8px; text-transform:uppercase;">Precision agriculture &middot; Benguet</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:#c9a227;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:13px 40px; color:#ffffff; font-size:12px; font-weight:700; letter-spacing:0.5px;">NEW CONTACT FORM SUBMISSION</td>
                    <td style="padding:13px 40px; color:rgba(255,255,255,0.85); font-size:12px; text-align:right; white-space:nowrap;">${timestamp}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 40px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="52" style="vertical-align:top;">
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width:48px; height:48px; background-color:#eaf1de; border-radius:50%; text-align:center; vertical-align:middle; font-size:17px; font-weight:700; color:#3d5a28; line-height:48px;">${initials}</td>
                        </tr>
                      </table>
                    </td>
                    <td style="vertical-align:middle; padding-left:14px;">
                      <p style="margin:0; font-size:17px; color:#1f2d12; font-weight:700;">${safeName}</p>
                      <p style="margin:2px 0 0; font-size:14px;"><a href="mailto:${safeEmail}" style="color:#5d7d34; text-decoration:none;">${safeEmail}</a></p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 8px;">
                <p style="margin:0 0 8px; font-size:11px; font-weight:700; color:#8a9178; text-transform:uppercase; letter-spacing:0.6px;">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f8f2; border-radius:10px;">
                  <tr>
                    <td style="padding:18px 20px; border-left:4px solid #7c9a3d; font-size:15px; line-height:1.65; color:#2c351f; border-radius:10px;">${safeComment}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 40px 36px;" align="center">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:#2f4a1e; border-radius:9px;">
                      <a href="mailto:${safeEmail}" style="display:inline-block; color:#ffffff; text-decoration:none; font-weight:700; font-size:14px; padding:14px 34px;">Reply to ${safeName.split(' ')[0]}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f7f8f2; padding:22px 40px; text-align:center; border-top:1px solid #e7e9de;">
                <p style="margin:0; font-size:12px; color:#8a9178;">Sent from the contact form on the E-Abono website</p>
                <p style="margin:5px 0 0; font-size:12px; color:#8a9178;">Benguet State University &middot; La Trinidad, Benguet</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0; line-height:0; font-size:0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:#c9a227; width:33%; height:4px;">&nbsp;</td>
                    <td style="background-color:#7c9a3d; width:33%; height:4px;">&nbsp;</td>
                    <td style="background-color:#2f4a1e; width:34%; height:4px;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

app.post('/api/contact', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many messages sent. Please wait 5 minutes before trying again.' });
  }

  const { name, email, comment } = req.body;

  if (!name || !email || !comment) {
    return res.status(400).json({ error: 'Name, email, and message are all required.' });
  }
  if (name.length > LIMITS.name) {
    return res.status(400).json({ error: `Name must be ${LIMITS.name} characters or fewer.` });
  }
  if (email.length > LIMITS.email) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (comment.length > LIMITS.comment) {
    return res.status(400).json({ error: `Message must be ${LIMITS.comment} characters or fewer.` });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (containsLink(name) || containsLink(comment)) {
    return res.status(400).json({ error: 'Links and website addresses are not allowed in messages.' });
  }
  if (containsSpam(name) || containsSpam(comment)) {
    return res.status(400).json({ error: 'Your message was flagged as spam. Please revise and try again.' });
  }

  try {
    await transporter.sendMail({
      from: `"E-Abono Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVING_EMAIL,
      replyTo: email,
      subject: `New message from ${name} via E-Abono Contact Form`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${comment}`,
      html: buildEmailHtml({ name, email, comment }),
    });
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Contact form server running on port ${PORT}`);
});
