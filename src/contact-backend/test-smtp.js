require('dotenv').config();
const nodemailer = require('nodemailer');

const pass = process.env.SMTP_PASS || '';
console.log('SMTP_USER:', JSON.stringify(process.env.SMTP_USER));
console.log('SMTP_PASS length:', pass.length);
console.log('SMTP_PASS first/last char:', JSON.stringify(pass[0]), JSON.stringify(pass[pass.length - 1]));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error('❌ SMTP auth failed:', err.message);
  } else {
    console.log('✅ SMTP auth succeeded! Server is ready to send.');
  }
});
