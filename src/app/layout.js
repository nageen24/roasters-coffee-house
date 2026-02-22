import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import GlobalReservationModal from '@/components/GlobalReservationModal';
import BackToTop from '@/components/BackToTop';
import PageLoader from '@/components/PageLoader';
import './globals.css';

export const metadata = {
  title: {
    default: 'Roasters Coffee House & Grill – Islamabad',
    template: '%s | Roasters Coffee House & Grill',
  },
  description: 'Experience the finest blend of premium coffee and expertly grilled dishes at Roasters Coffee House & Grill, Islamabad\'s premier dining destination.',
  keywords: ['Roasters Coffee House', 'Roasters Grill Islamabad', 'coffee shop Islamabad', 'grill restaurant F6', 'best coffee Islamabad'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <PageLoader />
          {/* Spacer: top bar 38px + nav 70px = 108px */}
          <div style={{ height: 108 }} />
          <Navbar />
          <div id="main-content">
            {children}
          </div>
          <Footer />
          <CartSidebar />
          <GlobalReservationModal />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}
