# IT Arena - Development Guidelines

## Project Overview

**IT Arena** is a modern web development platform built with:
- **Next.js 15** (App Router, Turbopack)
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Multi-locale support** (lt, en, sv, es)

## Development Workflow

### Starting Development

```bash
cd yakiwood-storefront
npm install
npm run dev
```

Server runs on **http://localhost:3001**

### Project Structure

```
yakiwood-storefront/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── [locale]/          # Locale-specific routes
├── components/             # React components
│   ├── cart/              # Shopping cart
│   ├── hero/              # Hero sections
│   ├── products/          # Product components
│   ├── ui/                # Generic UI components
│   └── sections/          # Page sections
├── lib/                    # Utilities
├── styles/                 # Global CSS & design system
├── public/                 # Static assets
└── package.json
```

## Key Development Patterns

### Internationalization

- Locale routing via `[locale]` directory
- Middleware handles locale detection and redirects
- Support for: `lt`, `en`, `sv`, `es`

### Component Organization

- Feature-based folder structure
- Reusable UI components in `ui/`
- Page sections in `sections/`

### Styling

- Tailwind CSS for utility-first styling
- Global CSS in `styles/`
- No hard-coded colors (use design tokens)

## Performance Optimization

- Turbopack for fast builds
- Image optimization via Next.js
- Code splitting and lazy loading
- ISR (Incremental Static Regeneration) ready

## Build & Deployment

### Production Build

```bash
npm run build
npm start
```

### Deployment

Deploy to Vercel or any Node.js hosting:

```bash
npm run build
npm start  # Runs on port 3001
```

## Code Standards

- **Type Safety**: Full TypeScript support
- **Linting**: ESLint configured
- **Formatting**: Code formatted with industry standards
- **Testing**: Playwright/Vitest ready

## Architecture Decisions

1. **Next.js App Router** - Modern file-based routing
2. **Tailwind CSS** - Utility-first, scalable styling
3. **Component-First** - Reusable, composable components
4. **Locale-First** - Multi-language support built-in
5. **Performance** - Turbopack for development speed

## Debugging

### Browser DevTools

- Network tab: Check API calls
- Console: JavaScript errors and logs
- React DevTools: Component inspection

### Terminal

```bash
# Check for lint errors
npm run lint

# View build output
npm run build
```

## Dependencies

### Production
- `next` - React framework
- `react` - UI library
- `react-dom` - React renderer
- `@heroicons/react` - Icon library
- `lucide-react` - Icon library

### Development
- `typescript` - Type checking
- `tailwindcss` - Styling
- `eslint` - Linting
- `@types/node`, `@types/react` - Type definitions

## Next Steps

1. ✓ Project initialized with Next.js 15
2. ✓ Development server running (port 3001)
3. → Build out pages and components
4. → Deploy to Vercel or production host

## Support

For issues:
1. Check the browser console for errors
2. Verify environment variables are set
3. Clear cache: `rm -r .next node_modules && npm install`
4. Consult [Next.js documentation](https://nextjs.org/docs)

---

**Framework**: Next.js 15  
**Runtime**: Node.js 18+  
**Package Manager**: npm  
**Status**: Development
