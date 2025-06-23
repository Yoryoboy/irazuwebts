
# 🧭 Irazu Technology Website - Development Blueprint

## 🧱 Architecture

The project follows **Screaming Architecture**. Each folder clearly communicates its responsibility.

```
/src
│
├── /components        → Reusable UI components
├── /features
│   ├── /about         → Logic + UI for About Us section
│   ├── /services      → Logic + UI for Services
│   ├── /join          → Job application functionality (CV upload)
│   └── /contact       → Contact form and integration with BillionMail
├── /routes            → Route definitions using React Router
├── /layout            → NavBar, Footer, wrappers
├── /hooks             → Custom React hooks
├── /utils             → Utility functions
├── /assets            → Images, logos, icons
├── /seo               → SEO config with React Helmet
```

---

## ⚙️ Stack Tecnológico

| Categoría       | Herramienta Elegida                         |
|------------------|---------------------------------------------|
| Librería base    | React                                       |
| Lenguaje         | TypeScript                                  |
| Routing          | React Router DOM                            |
| Estilos          | Tailwind CSS + Shadcn/ui                    |
| Animaciones      | Framer Motion                               |
| Formularios      | React Hook Form + BillionMail               |
| SEO              | React Helmet Async                          |
| Optimización     | Lazy loading (images and React.lazy routes) |
| Deploy           | Render                                      |

---

## 📄 Pages & Content Structure

### Home
- Hero section with slogan and CTA
- Highlighted services
- Join Irazu teaser
- Contact CTA

### About Us
- Mission / Vision
- Company background
- Team or timeline photo

### Services
- Service list with icons and descriptions

### Join Irazu
- Company culture and employee testimonials
- CV upload form (React Hook Form + BillionMail)
- Optional: job openings list

### Contact Us
- Contact info: address, email, phone
- Contact form (name, email, subject, message)
- Backend handled by BillionMail

---

## 🎯 Additional Best Practices

- Use `React.lazy` and `Suspense` for route-level code splitting
- SEO setup with React Helmet Async
- Favicon, meta tags, robots.txt, and sitemap.xml
- TypeScript for type safety and improved developer experience
- Accessibility and responsive design built in from the start
