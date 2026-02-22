'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { restaurantInfo } from '@/lib/data';
import { ShoppingBag, Bookmark, Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const { totalItems, setIsCartOpen, setIsReservationOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Home',    href: '/' },
    { label: 'Menu',    href: '/menu' },
    { label: 'Hi Tea',  href: '/hi-tea' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="main-header" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>

        {/* ── Top info bar */}
        <div style={{ background: '#1a1a1a', borderBottom: '1px solid rgba(255,255,255,0.06)', height: 38, display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <a href={`tel:${restaurantInfo.locations[0].phone}`}
              style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.75)', fontSize: 12, fontFamily: "'Playfair Display', cursive", fontWeight: 600, textDecoration: 'none', marginRight: 28, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}>
              <Phone size={11} color="#C19D60" /> Call now: {restaurantInfo.locations[0].phone}
            </a>
            <a href={`mailto:${restaurantInfo.email}`}
              style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.75)', fontSize: 12, fontFamily: "'Playfair Display', cursive", fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}>
              <Mail size={11} color="#C19D60" /> Write: {restaurantInfo.email}
            </a>
          </div>
        </div>

        {/* ── Main nav */}
        <div style={{ background: '#292929', height: 70, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>

            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', paddingRight: 32 }}>
              <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 21, fontWeight: 900, color: '#fff', letterSpacing: 3, textTransform: 'uppercase', lineHeight: 1.1 }}>
                ROASTERS
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, color: '#C19D60', letterSpacing: 4, textTransform: 'uppercase', marginTop: 3 }}>
                COFFEE HOUSE & GRILL
              </div>
            </Link>

            {/* Desktop nav links */}
            <nav style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} className="desktop-nav">
              <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, height: '100%', alignItems: 'center' }}>
                {navLinks.map((link, i) => (
                  <li key={i} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Link href={link.href}
                      style={{ padding: '0 13px', color: 'rgba(255,255,255,0.8)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, fontFamily: "'Poppins', sans-serif", textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right actions */}
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <button onClick={() => setIsReservationOpen(true)}
                style={{ display: 'flex', alignItems: 'center', gap: 7, height: 70, padding: '0 20px', border: 'none', borderLeft: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(255,255,255,0.7)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, cursor: 'pointer', fontFamily: "'Poppins', sans-serif", transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#C19D60'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#C19D60'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                <Bookmark size={13} /> Reservation
              </button>

              <button onClick={() => setIsCartOpen(true)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 70, height: 70, border: 'none', borderLeft: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', position: 'relative', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                <ShoppingBag size={21} />
                {totalItems > 0 && (
                  <span style={{ position: 'absolute', bottom: 14, right: 12, width: 18, height: 18, borderRadius: '50%', color: '#fff', background: '#C19D60', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Poppins', sans-serif" }}>
                    {totalItems}
                  </span>
                )}
              </button>

              <button onClick={() => setMobileOpen(true)}
                className="mob-menu-btn"
                style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: 70, height: 70, border: 'none', borderLeft: '1px solid rgba(255,255,255,0.1)', background: 'transparent', cursor: 'pointer' }}>
                <Menu size={22} color="rgba(255,255,255,0.8)" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay + drawer */}
      {mobileOpen && <div onClick={() => setMobileOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 999 }} />}
      <div style={{ position: 'fixed', top: 0, right: mobileOpen ? 0 : -320, width: 300, height: '100vh', background: '#1a1a1a', zIndex: 1000, transition: 'right 0.4s', overflowY: 'auto', padding: '80px 20px 30px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
        <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
          <X size={20} />
        </button>
        <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: 2, marginBottom: 4, textTransform: 'uppercase' }}>ROASTERS</div>
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, color: '#C19D60', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 28 }}>COFFEE HOUSE & GRILL</div>
        {navLinks.map((link, i) => (
          <Link key={i} href={link.href} onClick={() => setMobileOpen(false)}
            style={{ display: 'block', padding: '12px 0', color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid rgba(255,255,255,0.07)', fontFamily: "'Poppins', sans-serif", textDecoration: 'none' }}>
            {link.label}
          </Link>
        ))}
        <button onClick={() => { setIsReservationOpen(true); setMobileOpen(false); }}
          style={{ marginTop: 28, width: '100%', padding: 14, background: '#C19D60', border: 'none', color: '#fff', fontFamily: "'Playfair Display', cursive", fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
          Book a Table
        </button>
      </div>

      <style>{`
        @media (max-width: 1064px) {
          .desktop-nav { display: none !important; }
          .mob-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
