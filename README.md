# Boost33 Brand Strategy

Client-facing brand strategy document with inline commenting. Built with Next.js 14 (App Router) and Vercel KV.

## Setup

```bash
git clone <repo>
cd boost33-brand-strategy
npm install
cp .env.local.example .env.local
```

Fill in your Vercel KV credentials in `.env.local`. Create a KV store at [vercel.com/dashboard](https://vercel.com/dashboard) and copy the environment variables from the KV store settings page. See the [Vercel KV docs](https://vercel.com/docs/storage/vercel-kv) for full setup instructions.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to a GitHub repo and connect it to a Vercel project. Add the KV store to the Vercel project in the Storage tab — the environment variables will be added automatically.
