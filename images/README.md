# Images Folder

This folder contains all images used throughout the Wovenu Memorial Chapel website.

## Folder Structure

```
public/images/
├── hero/           # Hero section background images
├── pages/          # Page-specific background images
├── groups/         # Church groups and ministries images
├── clergy/         # Clergy and leadership images
├── events/         # Event and celebration images
└── general/        # General website images
```

## Image Guidelines

- **Hero Images**: 1920x1080px or larger, high quality
- **Page Backgrounds**: 1920x1080px minimum
- **Group Images**: 800x600px for cards, 1200x800px for hero sections
- **Formats**: JPG for photos, PNG for graphics with transparency
- **File Names**: Use descriptive names with hyphens (e.g., `sabbath-service-hero.jpg`)

## Usage in Code

```jsx
// Example usage in components
<Image
  src="/images/hero/church-hero.jpg"
  alt="Church congregation"
  fill
  className="object-cover"
/>
```

## Recommended Images

### Hero Images
- `church-hero.jpg` - Main church building or congregation
- `worship-hero.jpg` - Worship service or prayer
- `community-hero.jpg` - Community gathering or fellowship

### Page Backgrounds
- `news-hero.jpg` - News and announcements
- `teachings-hero.jpg` - Bible study or teaching
- `clergy-hero.jpg` - Clergy and leadership
- `services-hero.jpg` - Church services

### Group Images
- `children-fellowship.jpg` - Children's activities
- `womens-fellowship.jpg` - Women's group
- `mens-fellowship.jpg` - Men's group
- `senior-choir.jpg` - Choir performance
- `junior-choir.jpg` - Youth choir
- `brass-band.jpg` - Brass band performance 