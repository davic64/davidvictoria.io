# davidvictoria.io

Welcome to the repository for **davidvictoria.io**, my personal blog and portfolio website. This project is built with performance and modern web standards in mind, utilizing the power of Astro and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/) (v5) - For a fast, content-focused website.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4) - Utility-first CSS framework for rapid UI development.
- **Icons:** [Lucide](https://lucide.dev/) - Beautiful & consistent icons.
- **Deployment:** Vercel (Inferred)

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/davic64/davidvictoria.io.git
   cd davidvictoria.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.

## 📜 Scripts

| Command           | Description                                                |
| :---------------- | :--------------------------------------------------------- |
| `npm run dev`     | Starts the local development server with hot reloading.    |
| `npm run build`   | Builds the production-ready site to the `dist/` directory. |
| `npm run preview` | Previews the built site locally.                           |
| `npm run astro`   | Runs the Astro CLI directly.                               |

## 📂 Project Structure

A brief overview of the project structure:

```text
/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable Astro components (BlogPosts, UI, etc.)
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routing
│   └── styles/       # Global styles
├── astro.config.mjs  # Astro configuration
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
