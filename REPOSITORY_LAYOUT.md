# Repository Layout Summary

## Overview
This repository contains a Next.js-based portfolio website project designed to showcase projects and work.

## Root Structure

```
Portfolio-Website/
├── README.md                    # Root project description
└── portfolio-site/              # Main Next.js application directory
```

## Main Application: `portfolio-site/`

### Configuration Files
- **`package.json`** - Project dependencies and scripts
  - Next.js 16.0.7
  - React 19.2.0
  - TypeScript 5
  - Tailwind CSS 4
  - ESLint configuration
  
- **`next.config.ts`** - Next.js configuration (currently minimal/default)
- **`tsconfig.json`** - TypeScript configuration
- **`eslint.config.mjs`** - ESLint linting rules
- **`postcss.config.mjs`** - PostCSS configuration for Tailwind CSS
- **`next-env.d.ts`** - Next.js TypeScript environment definitions

### Source Code: `src/app/`
- **`layout.tsx`** - Root layout component
  - Configures Geist and Geist Mono fonts
  - Sets up global HTML structure
  - Includes global CSS
  
- **`page.tsx`** - Home page component
  - Default Next.js starter template
  - Uses Tailwind CSS for styling
  - Dark mode support
  
- **`globals.css`** - Global stylesheet
- **`favicon.ico`** - Site favicon

### Public Assets: `public/`
Static assets directory containing:
- `next.svg` - Next.js logo
- `vercel.svg` - Vercel logo
- `file.svg` - File icon
- `globe.svg` - Globe icon
- `window.svg` - Window icon

### Build & Dependencies
- **`node_modules/`** - NPM dependencies (not tracked in git)
- **`package-lock.json`** - Locked dependency versions

## Technology Stack

### Core Framework
- **Next.js 16.0.7** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Development Tools
- **ESLint** - Code linting
- **Next.js ESLint Config** - Recommended Next.js linting rules

## Project Status
- Currently in initial setup phase
- Uses default Next.js starter template
- Ready for portfolio content development
- Untracked in git (needs initial commit)

## Key Features
- TypeScript support
- Tailwind CSS for styling
- Dark mode ready (via Tailwind classes)
- Modern Next.js App Router architecture
- Font optimization with next/font

## Next Steps
1. Customize `page.tsx` with portfolio content
2. Update metadata in `layout.tsx`
3. Add portfolio project components
4. Configure deployment settings
5. Initialize git tracking for `portfolio-site/`

