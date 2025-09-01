import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import ConvexClientProvider from './ConvexClientProvider';
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
        <ConvexClientProvider>
          <AuthProvider>
            <CartProvider>
              {children}
              <Cart />
            </CartProvider>
          </AuthProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
