# WebAstral website

Next.js 16 App Router site for [webastral.com](https://www.webastral.com/).

## Local setup

```bash
git clone https://github.com/developer1607/webastral-website-new.git
cd webastral-website-new
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and fill SMTP values if you need the local contact API (`npm run test:mail`). Production/static hosting still uses PHP `send-email.php`.

```bash
npm run build          # Next.js server build
npm run build:static   # static export to out/
```
