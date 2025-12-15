# IT Arena - Web Development Agency

Modern web development platform for creating high-performance, SEO-optimized websites and e-commerce solutions.

## Quick Start

```bash
cd yakiwood-storefront
npm install
npm run dev
```

Open http://localhost:3001 in your browser.

## Project Structure

```
IT-arena-3001/
├── yakiwood-storefront/    # Next.js 15 frontend (port 3001)
├── .github/                # GitHub configuration
├── PORT.md                 # Development port guide
└── README.md              # This file
```

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, PostCSS
- **Build**: Turbopack, Vite
- **Deployment**: Vercel-ready

## Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (port 3001) |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run dev:lan` | Access via LAN (0.0.0.0:3001) |

## Development

### Storefront

```bash
cd yakiwood-storefront
npm run dev
```

- **App Router**: Next.js 15 App Router with TypeScript
- **Localization**: Multi-locale support via `[locale]` directory
- **Styling**: Tailwind CSS with global design system
- **Components**: Organized by feature (cart, hero, products, ui, sections)

### Project Layout

- `app/` – Page routes and layouts
- `components/` – React components
- `lib/` – Utilities and data fetching
- `styles/` – Global CSS and design tokens
- `public/` – Static assets

## Environment Variables

Create `yakiwood-storefront/.env.local`:

```env
# Add any required environment variables here
```

## Features

- ✓ High-performance rendering (Turbopack)
- ✓ SEO-optimized
- ✓ Multi-locale support
- ✓ Modern component architecture
- ✓ Responsive design

## Troubleshooting

### Port already in use

If port 3001 is busy:

```bash
npm run dev:auto
```

Or specify a different port:

```bash
next dev -p 3002
```

### Build errors

Clear cache and reinstall:

```bash
rm -r node_modules .next package-lock.json
npm install
npm run dev
```

## Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://react.dev)

## Support

For issues or questions, refer to the project structure or check the browser console for errors.

---

**Last Updated**: November 2025
