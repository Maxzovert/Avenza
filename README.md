# Avenza Realtech

Landing website for AVENZA REALTECH PRIVATE LIMITED.

Property name, location, area, price, photographs, nearby places, directors, and contact details are edited in one file:

`src/content/site.ts`

Leave a field empty when it is not confirmed. The page will say “To be confirmed” instead of inventing a figure. Do not add PAN or TAN. Do not use stock photographs as pictures of the land.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before publishing, set the live domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

That value is used for the canonical URL, Open Graph links, sitemap, and robots file.
