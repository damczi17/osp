# OSP Pilzno - Website

Modern website for Ochotnicza Straż Pożarna (Volunteer Fire Brigade) Pilzno built with Astro framework.

## Features

- **Modern Design**: Clean, responsive design with Tailwind CSS
- **Dynamic Animations**: Scroll-triggered animations, hover effects, and transitions
- **Video Background**: Hero section with video background support
- **Loading Screen**: Modern loading animation with progress bar
- **Glassmorphism**: Modern glass effects and backdrop blur
- **Multi-page**: Homepage, About, Services, Gallery, Contact pages
- **Mobile Responsive**: Optimized for all device sizes
- **Accessibility**: WCAG compliant with proper focus management
- **Performance**: Fast loading with Astro's static site generation
- **SEO Optimized**: Proper meta tags and semantic HTML

## Pages

1. **Homepage** (`/`) - Hero section, emergency numbers, services overview, statistics
2. **About** (`/o-nas`) - History, mission, team members, equipment
3. **Services** (`/uslugi`) - Detailed services, response times, emergency procedures
4. **Gallery** (`/galeria`) - Photo and video gallery with filtering
5. **Contact** (`/kontakt`) - Contact form, location, office hours

## Technology Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript
- **Icons**: Custom SVG icons
- **Fonts**: Inter font family

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20.x)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

### Adding Real Images

Replace placeholder images in `public/images/` with actual fire brigade photos:

- `rescue-operation-1.svg` - Rescue operations
- `medical-training-1.svg` - Training sessions
- `fire-truck-1.svg` - Equipment photos

### Adding Videos

**Hero Background Video:**
1. Add MP4 file to `public/videos/fire-hero-bg.mp4`
2. See `VIDEO_INSTRUCTIONS.md` for detailed instructions
3. Video should be 1920x1080, muted, 10-30 seconds, under 5MB

**Gallery Videos:**
Add video files to `public/videos/` and update the gallery page to reference them.

### Content Updates

- **Team Members**: Update team information in `src/pages/o-nas.astro`
- **Contact Info**: Update contact details in `src/pages/kontakt.astro`
- **Services**: Modify services in `src/pages/uslugi.astro`
- **Statistics**: Update numbers in homepage and gallery

### Styling

- Global styles: `src/styles/global.css`
- Component styles: Inline styles in `.astro` files
- Tailwind classes: Used throughout for responsive design

## Deployment

The website can be deployed to any static hosting service:

- **Vercel**: Connect GitHub repository
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Use GitHub Actions
- **Traditional hosting**: Upload `dist/` contents

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is created for OSP Pilzno. All rights reserved.

## Support

For technical support or questions about the website, contact the development team.

---

**OSP Pilzno** - Serving the community with dedication and professionalism.