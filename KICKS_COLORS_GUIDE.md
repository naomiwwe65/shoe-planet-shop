# Kicks Kenya Color Scheme Guide

## Brand Colors

Your project now uses the official Kicks Kenya color palette:

### Primary Colors
- **Black** (`#000000`) - Primary text and accents
- **White** (`#FFFFFF`) - Main background
- **Yellow/Gold** (`#FFD600`) - Highlights, buttons, CTAs
- **Light Beige** (`#F8F7F4`) - Secondary backgrounds
- **Cream** (`#FAFAFA`) - Alternative backgrounds
- **Anthracite Gray** (`#212121`) - Headers and depth

## How to Use Colors

### Tailwind Classes
```jsx
// Background colors
<div className="bg-kicks-black">Black background</div>
<div className="bg-kicks-white">White background</div>
<div className="bg-kicks-yellow">Yellow background</div>
<div className="bg-kicks-beige">Beige background</div>
<div className="bg-kicks-cream">Cream background</div>
<div className="bg-kicks-anthracite">Dark gray background</div>

// Text colors
<h1 className="text-kicks-black">Black text</h1>
<p className="text-kicks-white">White text</p>
<span className="text-kicks-yellow">Yellow text</span>
<div className="text-kicks-anthracite">Dark gray text</div>

// Border colors
<div className="border border-kicks-black">Black border</div>
<div className="border border-kicks-yellow">Yellow border</div>
```

### CSS Variables
```css
/* Using CSS variables */
.my-element {
  background-color: var(--kicks-yellow);
  color: var(--kicks-black);
  border: 2px solid var(--kicks-anthracite);
}
```

### Pre-built Component Classes
```jsx
// Buttons
<button className="btn-primary">Primary Button (Yellow)</button>
<button className="btn-secondary">Secondary Button (Black)</button>
<button className="btn-outline">Outline Button</button>

// Cards
<div className="card">Basic card</div>
<div className="card-hover">Hoverable card</div>

// Navigation
<a className="nav-link">Navigation link</a>
<a className="nav-link-active">Active navigation link</a>

// Product cards
<div className="product-card">
  <h3 className="product-title">Product Name</h3>
  <span className="product-price">$99.99</span>
</div>

// Footer
<footer className="footer-bg">
  <p className="footer-text">Footer text</p>
  <a className="footer-link">Footer link</a>
</footer>
```

## Example Component Updates

### Before (Original)
```jsx
<h1 className="text-text-alternative">Step Into Style</h1>
<Button title="Shop">Shop</Button>
```

### After (Kicks Kenya Colors)
```jsx
<h1 className="text-kicks-white text-shadow">Step Into Style</h1>
<button className="btn-primary">Shop</button>
```

## Color Combinations

### High Contrast (Primary)
- Black text on white background
- White text on black background
- Black text on yellow background

### Subtle (Secondary)
- Dark gray text on beige background
- Black text on cream background
- Yellow accents on white background

### Call-to-Action
- Yellow buttons with black text
- Black buttons with white text
- Yellow highlights on dark backgrounds

## Typography

The project now uses:
- **Inter** - Body text and general content
- **Poppins** - Headings and display text

## Shadows and Effects

```jsx
// Custom shadows
<div className="shadow-kicks">Standard shadow</div>
<div className="shadow-kicks-lg">Large shadow</div>

// Gradients
<div className="gradient-kicks">Yellow gradient</div>
<div className="gradient-dark">Dark gradient</div>
```

## Implementation Tips

1. **Replace existing colors** in your components with the new Kicks Kenya colors
2. **Use semantic classes** like `btn-primary` instead of hardcoded colors
3. **Maintain contrast** - ensure text is readable on all backgrounds
4. **Be consistent** - use the same color for similar elements across pages

## Quick Reference

| Element | Color Class | Hex Code |
|---------|-------------|----------|
| Primary text | `text-kicks-black` | `#000000` |
| Secondary text | `text-kicks-anthracite` | `#212121` |
| Accent text | `text-kicks-yellow` | `#FFD600` |
| Primary background | `bg-kicks-white` | `#FFFFFF` |
| Secondary background | `bg-kicks-beige` | `#F8F7F4` |
| Primary button | `btn-primary` | `#FFD600` |
| Secondary button | `btn-secondary` | `#000000` |
