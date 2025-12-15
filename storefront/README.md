This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Headless WooCommerce storefront for IT Arena using Next.js App Router.

## Setup

1) Copy env file and set your WordPress URL (must be publicly reachable or tunneled via e.g. ngrok):

```
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_WP_URL=https://your-wp-domain
```

2) Start dev server:

```
npm run dev
```

Open http://localhost:3000 — the home page fetches products from `${NEXT_PUBLIC_WP_URL}/wp-json/wc/store/products`.

## Notes

- Images are allowed from the configured WP host via next.config.ts images.remotePatterns.
- i18n locales configured: lt, en, sv, es (default lt). Add localized routes as needed.
- For auth/cart/checkout, plan to integrate WooCommerce Store API or migrate to custom flows (Stripe, PayPal, Paysera).


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
