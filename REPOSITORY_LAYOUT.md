# Repository Layout Summary

## Overview
This repository contains a fully functional Next.js-based portfolio website showcasing Thomas Osayi's work as a Software Engineer and Product Designer. The site features a modern, interactive design with dark/light theme support, animated elements, and comprehensive project showcases.

## Root Structure

```
Portfolio-Website/
├── README.md                    # Root project description
├── REPOSITORY_LAYOUT.md         # This file - project documentation
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
  - Scripts: `dev`, `build`, `start`, `lint`
  
- **`next.config.ts`** - Next.js configuration
- **`tsconfig.json`** - TypeScript configuration
- **`eslint.config.mjs`** - ESLint linting rules
- **`postcss.config.mjs`** - PostCSS configuration for Tailwind CSS
- **`next-env.d.ts`** - Next.js TypeScript environment definitions

### Source Code: `src/app/`
- **`layout.tsx`** - Root layout component
  - Metadata configuration (title, description, OpenGraph)
  - Global HTML structure
  - Suppresses hydration warnings
  
- **`page.tsx`** - Main home page component
  - Client-side rendered with theme state management
  - Mouse tracking for cursor glow effects
  - Animated floating orbs background
  - Integrates all section components
  - Dark/light theme switching
  
- **`globals.css`** - Global stylesheet
  - Google Fonts imports (Space Grotesk, Outfit, JetBrains Mono)
  - Custom font utility classes
  - Floating orb animations (5 different animations)
  - Custom selection colors
  - Tailwind CSS imports
  
- **`favicon.ico`** - Site favicon

### Components: `src/components/`

#### Layout Components: `src/components/layout/`
- **`NavBar.tsx`** - Navigation bar component
  - Smooth scroll navigation
  - Active section highlighting on scroll
  - Dark/light theme toggle button
  - Responsive design
  - Sticky positioning
  
- **`Footer.tsx`** - Footer component
  - Copyright information (2025)
  - "Designed & Built with ♥" message
  - Theme-aware styling

#### Section Components: `src/components/sections/`
- **`Hero.tsx`** - Hero/landing section
  - Status badge with availability indicator
  - Animated gradient text for name
  - Role descriptions (Software Engineer × Product Designer)
  - Call-to-action buttons (View My Work, View Resume)
  - Scroll indicator
  - Resume modal integration
  
- **`ProjectSection.tsx`** - Projects showcase section
  - Featured project card (with video preview)
  - Regular project cards grid
  - Project modal integration
  - Theme-aware styling
  
- **`SkillsSection.tsx`** - Skills display section
  - Skill icons and names
  - Animated skill cards
  - Responsive grid layout
  
- **`AboutSection.tsx`** - About/bio section
  - Personal introduction
  - Background information
  - Theme-aware styling
  
- **`ContactSection.tsx`** - Contact section
  - Contact links (Email, LinkedIn, GitHub)
  - Animated contact cards
  - Social media integration

#### Project Components: `src/components/projects/`
- **`FeaturedProjectCard.tsx`** - Featured project card
  - Large format project display
  - Phone mockup with video preview
  - Video play/pause on click
  - Hover animations
  - Multiple video format support (MP4, WebM, MOV)
  - Error handling for video loading
  
- **`ProjectCard.tsx`** - Regular project card
  - Compact project display
  - Gradient backgrounds
  - Hover effects
  - Click to open modal
  
- **`ProjectModal.tsx`** - Project detail modal
  - Full project information display
  - Keyboard navigation (Escape to close)
  - Focus trap for accessibility
  - Smooth animations
  - Project links (live URL, GitHub)

#### UI Components: `src/components/ui/`
- **`ResumeModal.tsx`** - Resume preview modal
  - PDF/image preview display
  - Download button
  - Keyboard navigation (Escape to close)
  - Focus management
  - Scrollable content
  - Client-side mounting to prevent hydration issues

### Data: `src/data/`
- **`projects.ts`** - Project data definitions
  - Project interface with full type definitions
  - 4 projects: NOM, HoopGang, AI Engine, Analytics
  - Project metadata (title, description, tags, gradients, URLs)
  
- **`skills.ts`** - Skills data definitions
  - Skill interface
  - 8 skills with icons (React, TypeScript, JavaScript, Firebase, Python, Figma, Node.js, Tailwind)

### Public Assets: `public/`
Static assets directory containing:
- `nom-demo.mp4` - Video demo for NOM project
- `resume-preview.png` - Resume preview image
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
- **React 19.2.0** - UI library with hooks
- **TypeScript 5** - Type safety and IntelliSense

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Custom Animations** - Floating orb animations, hover effects, transitions
- **Google Fonts** - Space Grotesk, Outfit, JetBrains Mono

### Development Tools
- **ESLint** - Code linting
- **Next.js ESLint Config** - Recommended Next.js linting rules
- **TypeScript** - Static type checking

## Implemented Features

### Theme System
- ✅ Dark/light theme toggle
- ✅ Theme persistence (client-side state)
- ✅ Smooth theme transitions
- ✅ Theme-aware component styling
- ✅ Gradient backgrounds that adapt to theme

### Animations & Effects
- ✅ Floating orb animations (5 different patterns)
- ✅ Cursor glow effect (desktop only)
- ✅ Smooth scroll navigation
- ✅ Hover animations on cards and buttons
- ✅ Page transitions
- ✅ Loading states

### Interactive Components
- ✅ Video preview with play/pause controls
- ✅ Project modals with keyboard navigation
- ✅ Resume modal with PDF preview
- ✅ Smooth scroll to sections
- ✅ Active navigation highlighting
- ✅ Responsive design (mobile, tablet, desktop)

### Accessibility
- ✅ Keyboard navigation (Escape key, Enter/Space)
- ✅ Focus management in modals
- ✅ ARIA labels and roles
- ✅ Semantic HTML structure
- ✅ Screen reader friendly

### Performance
- ✅ Client-side mounting to prevent hydration issues
- ✅ Optimized images (Next.js Image component)
- ✅ Lazy loading for modals
- ✅ Efficient state management

## Project Status
- ✅ Fully functional portfolio website
- ✅ All major sections implemented
- ✅ Dark/light theme system working
- ✅ Responsive design complete
- ✅ Project showcase with modals
- ✅ Contact section with social links
- ✅ Resume preview functionality
- ✅ Smooth animations and transitions
- ✅ TypeScript types defined
- ✅ No linter errors

## Key Features
- ✅ TypeScript support with full type safety
- ✅ Tailwind CSS for styling
- ✅ Dark/light theme toggle with smooth transitions
- ✅ Modern Next.js App Router architecture
- ✅ Custom font integration (Google Fonts)
- ✅ Animated background elements
- ✅ Interactive project showcases
- ✅ Video preview functionality
- ✅ Modal components with accessibility
- ✅ Responsive design
- ✅ SEO metadata configuration
- ✅ Smooth scroll navigation

## Site Sections
1. **Hero Section** - Landing area with name, role, and CTAs
2. **Projects Section** - Featured and regular project cards
3. **Skills Section** - Technology skills display
4. **About Section** - Personal background and information
5. **Contact Section** - Contact links and social media

## Next Steps (Optional Enhancements)
1. Add more project case studies
2. Implement blog section
3. Add analytics tracking
4. Configure deployment (Vercel recommended)
5. Add more animations/transitions
6. Implement contact form
7. Add project filtering/search
8. Add testimonials section

