# Shoe Planet Kenya - Next.js Project

A modern e-commerce website for Shoe Planet Kenya built with Next.js, featuring separate sections for Women, Men, Kids, and Products.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.jsx           # Home page
│   ├── women/page.jsx     # Women's shoes page
│   ├── men/page.jsx       # Men's shoes page
│   ├── kids/page.jsx      # Kids shoes page
│   ├── products/page.jsx  # Products page
│   ├── layout.jsx         # Root layout
│   └── globals.css        # Global styles
├── home/components/       # Home page components
├── women/components/      # Women's page components
├── men/components/        # Men's page components
├── kids/components/       # Kids page components
├── products/components/   # Products page components
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Using Relume UI components and Framer Motion animations
- **SEO Optimized**: Next.js App Router with metadata
- **Performance**: Optimized images and code splitting
- **Navigation**: Clean routing between different sections

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Main landing page with hero section and featured products
- **Women** (`/women`) - Women's footwear collection
- **Men** (`/men`) - Men's footwear collection  
- **Kids** (`/kids`) - Children's footwear collection
- **Products** (`/products`) - All products with filtering

## Dependencies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **@relume_io/relume-ui** - UI component library

## Notes

- The project uses the Next.js App Router (newer routing system)
- Components are organized by page sections
- All images are served from CloudFront CDN
- Responsive design works on all device sizes

## Customization

You can customize:
- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Page metadata in each page component
- Component styling using Tailwind classes
