# kj7kunal.github.io

![Preview](public/social.jpg)

A modern, fast portfolio and blog built with Astro. Features a clean design, excellent performance, and comprehensive SEO.

## 🚀 Features

- ⚡ **Lightning Fast**: Built with Astro for optimal performance
- 📱 **Responsive Design**: Looks great on all devices
- 🎨 **Modern UI**: Clean, minimalist design with dark/light theme
- 📝 **Blog System**: Organized content with categories (life, experiments, ml)
- 🔍 **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD
- 📊 **Analytics**: Google Analytics with Partytown integration
- 🗺️ **Sitemap**: Auto-generated sitemap for search engines
- 📡 **RSS Feed**: Subscribe to blog updates
- 🎯 **Custom 404**: Fun, interactive 404 page with Easter egg

## 📁 Project Structure

```
src/
├── components/
│   ├── SEO.astro              # SEO meta tags and JSON-LD
│   ├── GoogleAnalytics.astro  # GA4 integration with Partytown
│   ├── Header.astro           # Navigation header
│   ├── Hero.astro             # Homepage hero section
│   ├── About.astro            # About section
│   ├── Storyboard.astro       # Professional journey
│   ├── DigitalZine.astro      # Blog posts showcase
│   └── Footer.astro           # Site footer
├── content/
│   ├── config.ts              # Content collections schema
│   ├── life/                  # Personal life posts
│   ├── experiments/           # Technical experiments
│   └── ml/                    # Machine learning posts
├── layouts/
│   └── Layout.astro           # Main layout with SEO and analytics
├── pages/
│   ├── index.astro            # Homepage
│   ├── 404.astro              # Custom 404 page
│   ├── rss.xml.js             # RSS feed generator
│   └── blog/
│       ├── index.astro        # Blog listing
│       └── [slug].astro       # Blog post template
└── styles/
    └── global.css             # Global styles and utilities
```

## 🛠️ Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment** (optional):
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Google Analytics tracking ID
   ```

3. **Development**:
   ```bash
   npm run dev
   ```

4. **Build**:
   ```bash
   npm run build
   ```

5. **Preview build**:
   ```bash
   npm run preview
   ```

## 📊 Analytics Setup

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add it to `.env.local` as `GA_TRACKING_ID=G-XXXXXXXXXX`
4. Or set it as a repository variable in GitHub Actions

## 📝 Content Management

### Adding Blog Posts

1. Create a new folder in the appropriate category:
   - `src/content/life/` for personal posts
   - `src/content/experiments/` for technical experiments
   - `src/content/ml/` for ML/AI content

2. Add an `index.md` file with frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   description: "Brief description for SEO"
   date: 2024-01-01
   tags: ["tag1", "tag2"]
   category: "life" # or "experiments" or "ml"
   featured: false
   ---

   Your content here...
   ```

3. Include images in the same folder and reference them:
   ```markdown
   ![Alt text](./image.jpg)
   ```

### Content Categories

- **Life**: Personal experiences, travel, reflections
- **Experiments**: Technical projects, tutorials, experiments
- **ML**: Machine learning, AI, data science content

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.mjs` to customize colors and themes.

### SEO
The SEO component automatically generates:
- Page titles and descriptions
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data
- Canonical URLs

### 404 Page
The custom 404 page includes:
- Animated 404 text
- ASCII art terminal
- Action buttons (Home, Blog, Back)
- Easter egg: Try the Konami Code! ↑↑↓↓←→←→BA

## 📡 Generated Files

- **RSS Feed**: Available at `/rss.xml`
- **Sitemap**: Auto-generated at `/sitemap-index.xml`
- **Blog Pages**: All posts available at `/blog/[slug]/`

## 🚀 Deployment

This site is configured for GitHub Pages deployment:

1. Push to the `develop` branch
2. GitHub Actions will build and deploy automatically
3. Site will be available at `https://kj7kunal.github.io`

### GitHub Actions Setup

1. **Enable GitHub Pages**: Repo Settings → Pages → Source: "GitHub Actions"
2. **Set Environment Variable**: Settings → Secrets and variables → Actions → Variables
   - Name: `GA_TRACKING_ID`
   - Value: Your Google Analytics tracking ID

## 📦 Key Dependencies

- **Astro**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **MDX**: Enhanced markdown with JSX
- **React**: For interactive components
- **Partytown**: Web worker for analytics
- **@astrojs/rss**: RSS feed generation
- **@astrojs/sitemap**: Sitemap generation

## 🔧 Build Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 📈 Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Bundle Size**: Minimal JavaScript, mostly static HTML
- **Image Optimization**: Automatic WebP conversion
- **Critical CSS**: Inlined for faster rendering

## 🎯 Special Features

### Konami Code Easter Egg
Try entering the famous Konami Code (↑↑↓↓←→←→BA) on the 404 page for a surprise!

### Dark Mode
Automatic dark/light theme switching based on user preference with manual toggle.

### Responsive Design
Fluid typography and spacing that adapts beautifully to any screen size.

---

Built with ❤️ using [Astro](https://astro.build/)
