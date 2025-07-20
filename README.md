# Apostles Revelations Society - Wovenu Memorial Chapel Website

A modern, responsive church website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, contemporary design inspired by successful church websites
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Accessibility**: Built with accessibility best practices in mind
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized images and fast loading times

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Fonts**: Poppins (sans-serif) and Playfair Display (serif)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wovenu-memorial-chapel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── components/          # Reusable React components
│   ├── Navbar.tsx      # Navigation component with mobile menu
│   ├── Hero.tsx        # Hero section with call-to-action
│   ├── Ministries.tsx  # Ministries showcase section
│   ├── Sermons.tsx     # Sermons display with cards
│   └── Footer.tsx      # Footer with contact info and links
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper with global styles
│   ├── index.tsx       # Homepage
│   └── news/           # WMC News pages
├── styles/             # Global styles and CSS
└── public/             # Static assets
```

## Design System

### Color Palette

- **Primary**: Blue tones (#0ea5e9 - #0c4a6e)
- **Gold**: Accent colors (#f59e0b - #78350f) 
- **Navy**: Dark backgrounds (#1e293b - #0f172a)
- **Gray**: Text and subtle elements

### Typography

- **Headings**: Poppins (bold, semi-bold)
- **Body**: Poppins (regular, medium)
- **Decorative**: Playfair Display (serif)

### Components

- **Buttons**: Primary (gold) and Secondary (white/outlined) variants
- **Cards**: Elevated with shadows and hover effects
- **Navigation**: Fixed header with mobile hamburger menu
- **Animations**: Fade-in, slide-in, and scale effects

## Key Sections

### Homepage

1. **Hero Section**: Welcome message with background image and CTAs
2. **Mission Statement**: Church purpose and Bible verse
3. **Visitors/Members**: Dual call-to-action cards
4. **Ministries**: Grid of ministry cards with descriptions
5. **Sermons**: Latest sermon videos with metadata
6. **Final CTA**: Encouraging visitors to connect

### Navigation Menu

- WMC News
- Clergy  
- Sabbath Service
- Children's Fellowship
- Events Updates
- ShewBread
- Teachings
- Passover, etc

## Customization

### Updating Content

1. **Church Information**: Update details in `components/Footer.tsx`
2. **Ministries**: Modify the ministries array in `components/Ministries.tsx`
3. **Sermons**: Update sermon data in `components/Sermons.tsx`
4. **Hero Message**: Edit text in `components/Hero.tsx`

### Styling Changes

1. **Colors**: Modify the color palette in `tailwind.config.js`
2. **Fonts**: Update font imports in `styles/globals.css`
3. **Components**: Edit component styles using Tailwind classes

### Adding New Pages

1. Create new files in the `pages/` directory
2. Follow Next.js file-based routing conventions
3. Use existing components for consistent styling

## Performance Optimizations

- **Image Optimization**: Using Next.js Image component
- **Font Loading**: Preconnect to Google Fonts
- **Code Splitting**: Automatic with Next.js
- **SEO**: Meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- Netlify
- Heroku
- AWS Amplify
- DigitalOcean App Platform

## Future Enhancements

### Content Management

Consider integrating with a headless CMS for dynamic content:

- **Contentful**: For rich content management
- **Strapi**: Self-hosted option
- **Sanity**: Developer-friendly CMS
- **WordPress Headless**: If familiar with WordPress

### Features to Add

- Event calendar integration
- Online giving/donations
- Member portal with authentication
- Sermon video player
- Newsletter signup
- Contact forms
- Photo galleries
- Blog functionality

## Support

For questions or support, please contact the development team or create an issue in the repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 