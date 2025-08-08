# davidvictoria.io

> Personal developer blog built with modern web technologies.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/davevictoria/davidvictoria.io)
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## 🚀 Overview

A modern, performant personal website featuring a blog. Built with Astro for optimal performance and SEO, styled with TailwindCSS for responsive design, and powered by Hashnode CMS for content management.

### ✨ Features

- **⚡ Fast & Optimized**: Built with Astro for lightning-fast static generation
- **📱 Responsive Design**: Mobile-first approach with TailwindCSS
- **📝 Dynamic Blog**: Integrated with Hashnode CMS for easy content management
- **🎯 SEO Ready**: Optimized meta tags, OpenGraph, and canonical URLs
- **🔄 Auto-Deploy**: GitHub Actions workflow for seamless Vercel deployment
- **📊 Performance First**: Optimized images, lazy loading, and minimal JavaScript

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) 5.12.8
- **Frontend**: [React](https://react.dev) 19 + TypeScript
- **Styling**: [TailwindCSS](https://tailwindcss.com) 4
- **CMS**: [Hashnode](https://hashnode.com) GraphQL API
- **Deployment**: [Vercel](https://vercel.com)
- **CI/CD**: GitHub Actions

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/davic64/davidvictoria.io
   cd davidvictoria.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "HASHNODE_PUBLICATION_HOST=your-blog.hashnode.dev" > .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4321`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Home.astro       # Homepage component with blog grid
│   └── ui/              # UI components
│       ├── BlogCard.astro
│       └── Navbar.astro
├── config/              # Site configuration
│   └── siteConfig.ts    # Navigation and site settings
├── layouts/             # Page layouts
│   └── Layout.astro     # Base layout with SEO
├── lib/                 # Utilities and integrations
│   └── hashnode.ts      # Hashnode CMS integration
├── pages/               # File-based routing
│   ├── index.astro      # Homepage
│   └── post/
│       └── [slug].astro # Dynamic blog post pages
├── styles/              # Global styles
│   └── global.css       # Base styles and Tailwind imports
└── types/               # TypeScript definitions
    └── hashnode.ts      # Hashnode API types
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 🌐 Deployment

The project is configured for automatic deployment to Vercel:

1. **Push to main branch** triggers the GitHub Action
2. **Vercel builds and deploys** automatically
3. **Live site** updates with your changes

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel (requires Vercel CLI)
vercel --prod
```

## 📝 Content Management

### Adding Blog Posts

1. **Create posts** in your Hashnode publication
2. **Configure** the `HASHNODE_PUBLICATION_HOST` environment variable
3. **Posts appear automatically** on your site

### Customizing Content

- **Homepage content**: Edit `src/components/Home.astro`
- **Navigation**: Update `src/config/siteConfig.ts`
- **Site metadata**: Modify `src/layouts/Layout.astro`

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HASHNODE_PUBLICATION_HOST` | Your Hashnode blog URL | Yes |

### Site Configuration

Edit `src/config/siteConfig.ts` to customize:

```typescript
export const siteConfig = {
  itemsNav: [
    { label: "Inicio", href: "/" },
    // Add more navigation items
  ],
};
```

## 🎨 Customization

### Styling

The project uses TailwindCSS v4. Customize styles in:
- `src/styles/global.css` - Global styles
- Component files - Component-specific styles

### Layout

Modify the base layout in `src/layouts/Layout.astro` for:
- Meta tags and SEO
- Global HTML structure
- Analytics integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**David Victoria**
- Website: [davidvictoria.io](https://davidvictoria.io)
- GitHub: [@davevictoria](https://github.com/davevictoria)

---

Built with ❤️ using Astro and modern web technologies.
