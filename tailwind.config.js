/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './home/components/**/*.{js,ts,jsx,tsx,mdx}',
    './women/components/**/*.{js,ts,jsx,tsx,mdx}',
    './men/components/**/*.{js,ts,jsx,tsx,mdx}',
    './kids/components/**/*.{js,ts,jsx,tsx,mdx}',
    './products/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Luxury Color Palette
        'kicks-black': '#000000',
        'kicks-white': '#FFFFFF',
        'kicks-gold': '#D4AF37',        // Sophisticated gold instead of bright yellow
        'kicks-bronze': '#CD7F32',      // Rich bronze accent
        'kicks-champagne': '#F7E7CE',    // Elegant champagne
        'kicks-cream': '#FAFAFA',
        'kicks-anthracite': '#212121',
        'kicks-charcoal': '#36454F',     // Deep charcoal
        'kicks-slate': '#708090',        // Sophisticated slate gray
        'kicks-pearl': '#F0F0F0',        // Pearl white
        
        // Legacy colors for compatibility
        'background-primary': '#FFFFFF',
        'border-primary': '#E5E7EB',
        'text-primary': '#000000',
        'text-secondary': '#212121',
        'accent-primary': '#D4AF37',
        'accent-secondary': '#F7E7CE',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'], // Premium serif font
      },
      boxShadow: {
        'kicks': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'kicks-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
