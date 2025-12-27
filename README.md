# AI/ML Engineer Portfolio

A modern, animated portfolio website showcasing AI & Machine Learning engineering expertise.

## Features

- 🎨 Modern, clean design with glassmorphism and gradient effects
- 🌓 Dark/Light theme toggle with persistent preference
- ✨ Smooth Framer Motion animations and Lottie integrations
- 📱 Fully responsive mobile-first design
- 🚀 Fast performance with React + Vite
- 🎯 SEO-friendly with meta tags
- 📊 Data-driven content management

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + Lottie
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding Lottie Animations

1. Visit [LottieFiles](https://lottiefiles.com/)
2. Find animations you like
3. Update URLs in `src/config/lottieConfig.js`

### Adding Projects

Edit `src/data/projects.js` to add new projects:

```javascript
{
  id: 5,
  title: 'Your Project',
  subtitle: 'Short description',
  description: 'Detailed description',
  impact: ['Impact point 1', 'Impact point 2'],
  techStack: ['Tech1', 'Tech2'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  featured: true,
  date: 'Month Year'
}
```

### Adding Certifications

Edit `src/data/certifications.js`:

```javascript
{
  id: 4,
  title: 'Certification Name',
  issuer: 'Issuing Organization',
  date: 'Month Year',
  credentialUrl: 'https://...',
  category: 'Category',
  featured: true
}
```

### Updating Personal Info

Edit `src/data/personal.js` to update contact information, bio, and social links.

## Project Structure

```
src/
├── components/         # React components
├── config/            # Configuration files (Lottie)
├── data/              # Data configuration files
├── hooks/             # Custom React hooks
├── index.css          # Global styles
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## License

© 2024 Dhruv Tiwari. All rights reserved.
