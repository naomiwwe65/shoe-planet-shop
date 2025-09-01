import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';
import './globals.css';

export const metadata = {
  title: 'Shoe Planet Kenya - Premium Footwear',
  description: 'Discover premium footwear for men, women, and kids at Shoe Planet Kenya. Authentic shoes with free shipping and easy returns.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
