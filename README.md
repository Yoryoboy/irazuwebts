# Irazu Technology Website

## Overview
A modern, responsive website for Irazu Technology, a company specializing in telecom network design services including FTTH (Fiber to the Home) designs, HFC (Hybrid Fiber-Coax) network design, and node split & segmentation services. Built with React, TypeScript, Vite, and TailwindCSS.

## Features
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI**: Clean and professional interface with animations and transitions
- **Component-Based Architecture**: Modular components for better maintainability
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Accessibility**: Designed with accessibility in mind, including proper contrast and semantic HTML

## Tech Stack
- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **SEO**: React Helmet Async

## Project Structure
```
src/
├── assets/          # Static assets like images
├── components/      # Reusable UI components
├── features/        # Feature-specific components
│   ├── home/        # Home page components
│   ├── about/       # About page components
│   ├── services/    # Services page components
│   ├── join/        # Join/Careers page components
│   └── contact/     # Contact page components
├── layout/          # Layout components (Navbar, Footer, etc.)
├── routes/          # Routing configuration
└── App.tsx          # Main application component
```

## Key Components
- **PageHero**: Hero section with background image and text overlay
- **CTA**: Call-to-action component with customizable styling
- **ServicesHighlight**: Showcase of featured telecom services
- **BuildFutureSection**: Company vision and mission statement section
- **ScrollToTop**: Utility component for scroll restoration between page navigations

## Animation Strategy
The website uses Framer Motion for animations with a focus on:  
- Fade-in effects triggered on scroll using `useInView` hook
- Consistent animation patterns across components
- Performance optimization to avoid rendering issues

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/irazuweb.git
cd irazuweb

# Install dependencies
npm install
# or
yarn

# Start development server
npm run dev
# or
yarn dev
```

### Building for Production
```bash
npm run build
# or
yarn build
```

## Deployment
The built files will be in the `dist` directory and can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

## License
All rights reserved. This codebase is proprietary and confidential.
