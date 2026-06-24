# E-Abono Contact Form Backend

This is a small server whose only job is to receive the contact form submission
from your React site and send it as an email via SMTP. It exists because SMTP
credentials cannot safely live in frontend/browser code.

## 1. Get a Gmail App Password

Gmail no longer allows logging in via SMTP with your normal password.

1. Open the Google Account settings for `precisionagribenguet@gmail.com`
2. Go to **Security** → turn on **2-Step Verification** (required first)
3. Go to **Security** → search **"App Passwords"** → create one, name it
   something like "E-Abono Website"
4. Copy the 16-character password it gives you (you'll only see it once)

## 2. Install dependencies

```bash
cd contact-backend
npm install
```

## 3. Configure environment variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Then open `.env` and fill in:
- `SMTP_USER` — the Gmail address that will send the mail (can be the same
  `precisionagribenguet@gmail.com`, or a separate sending account)
- `SMTP_PASS` — the App Password from step 1 (not your normal password)
- `RECEIVING_EMAIL` — where the message should land (`precisionagribenguet@gmail.com`)

## 4. Run it locally

```bash
npm run dev
```

This starts the server at `http://localhost:5000`. Test it's alive by sending a
POST request to `http://localhost:5000/api/contact` with JSON body
`{ "name": "...", "email": "...", "comment": "..." }` — you can use Postman or
your browser's dev console with `fetch`.

## 5. Connect your React form

In your `ContactUs.tsx`, the form should POST to this server's `/api/contact`
endpoint (already wired up in the updated file provided alongside this README).
While developing, the URL will be `http://localhost:5000/api/contact`.

## 6. Deploying so it works on your live website

Right now this only runs on your own computer. For it to work once your site
is published, you need to deploy this backend folder somewhere that keeps a
server running, for example:
- **Render.com** (has a free tier, simplest for student projects)
- **Railway.app**
- Your school's own server, if you have SSH/Node access there

Whichever you pick:
1. Push this `contact-backend` folder to its own GitHub repo (or a subfolder)
2. Set the same environment variables (`SMTP_USER`, `SMTP_PASS`, etc.) in that
   platform's dashboard — never put real credentials in the code itself
3. You'll get a public URL like `https://your-app.onrender.com`
4. Update the `fetch` URL in `ContactUs.tsx` to that live URL instead of
   `http://localhost:5000`

Also tighten the CORS line in `server.js` before going live:

```js
app.use(cors({ origin: 'https://your-actual-website-domain.com' }));
```

This stops random other websites from being able to call your email endpoint.

## Gmail sending limits

A regular Gmail account can send roughly 500 emails per day via SMTP. For a
contact form this is far more than enough.
