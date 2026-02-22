'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const galleryItems = [
  // Dishes
  { id: 1, cat: 'dishes', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Grilled Prime Rib' },
  { id: 2, cat: 'dishes', src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', alt: 'Signature Burger' },
  { id: 3, cat: 'dishes', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', alt: 'BBQ Platter' },
  { id: 4, cat: 'dishes', src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80', alt: 'Chicken Steak' },
  { id: 5, cat: 'dishes', src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80', alt: 'Fish & Chips' },
  { id: 6, cat: 'dishes', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Wood-fired Pizza' },
  // Coffee
  { id: 7, cat: 'restaurant', src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80', alt: 'Cappuccino Art' },
  { id: 8, cat: 'restaurant', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', alt: 'Coffee Blends' },
  { id: 9, cat: 'restaurant', src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80', alt: 'Restaurant Interior' },
  { id: 10, cat: 'restaurant', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', alt: 'Dining Room' },
  { id: 11, cat: 'restaurant', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Bar Counter' },
  { id: 12, cat: 'restaurant', src: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80', alt: 'Outdoor Seating' },
  // Events
  { id: 13, cat: 'events', src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80', alt: 'Live Jazz Night' },
  { id: 14, cat: 'events', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', alt: 'Corporate Dinner' },
  { id: 15, cat: 'events', src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80', alt: 'Weekend BBQ' },
  { id: 16, cat: 'events', src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Coffee Tasting Event' },
  // Hi Tea
  { id: 17, cat: 'video', src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80', alt: 'Hi Tea Setup' },
  { id: 18, cat: 'video', src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80', alt: 'Afternoon Tea Cakes' },
  { id: 19, cat: 'video', src: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80', alt: 'Gourmet Sandwiches' },
  { id: 20, cat: 'video', src: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&q=80', alt: 'Desserts Display' },
  // Extra dishes
  { id: 21, cat: 'dishes', src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80', alt: 'Seafood Platter' },
  { id: 22, cat: 'dishes', src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80', alt: 'Breakfast Special' },
  { id: 23, cat: 'restaurant', src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80', alt: 'Rooftop View' },
  { id: 24, cat: 'events', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80', alt: 'Birthday Celebration' },
];

const filters = [
  { id: 'all',        label: 'All Images',  num: '01.' },
  { id: 'dishes',     label: 'Dishes',      num: '02.' },
  { id: 'restaurant', label: 'Restaurant',  num: '03.' },
  { id: 'events',     label: 'Events',      num: '04.' },
  { id: 'video',      label: 'Hi Tea',      num: '05.' },
];

export default function GalleryPage() {
  const [active, setActive] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const { setIsReservationOpen } = useCart();

  const visible = active === 'all' ? galleryItems : galleryItems.filter(g => g.cat === active);

  return (
    <>
      {/* ─── PAGE HEADER ──────────────────────────────────────────────── */}
      <div style={{ position: 'relative', minHeight: 380, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', float: 'left', width: '100%', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
        <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0.55 }} />
        {/* Corner decorations */}
        <div style={{ position: 'absolute', left: 60, top: 40, width: 70, height: 70, borderLeft: '1px dotted rgba(255,255,255,0.35)', borderTop: '1px dotted rgba(255,255,255,0.35)', zIndex: 5 }} />
        <div style={{ position: 'absolute', right: 60, bottom: 40, width: 70, height: 70, borderRight: '1px dotted rgba(255,255,255,0.35)', borderBottom: '1px dotted rgba(255,255,255,0.35)', zIndex: 5 }} />
        <div style={{ position: 'relative', zIndex: 5, padding: '0 20px' }}>
          <div style={{ fontSize: 10, letterSpacing: 4, color: '#C19D60', marginBottom: 18 }}>●●●●●</div>
          <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: '#C19D60', fontSize: 16, marginBottom: 12 }}>
            Enjoy your time in our restaurant with pleasure.
          </h4>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 'clamp(28px, 5vw, 54px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
            Restaurant Gallery
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#C19D60' }}>›</span>
            <span style={{ color: '#fff' }}>Gallery</span>
          </div>
        </div>
      </div>

      {/* ─── GALLERY SECTION ──────────────────────────────────────────── */}
      <section style={{ background: '#212121', padding: '80px 0 60px', float: 'left', width: '100%', minHeight: 600 }}>
        <div className="container">

          {/* Permanent filter bar */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ position: 'absolute', top: '50%', left: -160, width: 130, height: 1, borderTop: `1px dotted #C19D60`, transform: 'translateY(-50%)', opacity: 0.5 }} />
              <div style={{ position: 'absolute', top: '50%', right: -160, width: 130, height: 1, borderTop: `1px dotted #C19D60`, transform: 'translateY(-50%)', opacity: 0.5 }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, border: `1px solid #C19D60`, background: 'rgba(193,157,96,0.05)', padding: '18px 24px' }}>
                {filters.map(f => (
                  <button key={f.id} onClick={() => setActive(f.id)}
                    style={{ margin: '0 18px', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 16, fontWeight: active === f.id ? 700 : 400, color: active === f.id ? '#C19D60' : 'rgba(255,255,255,0.55)', position: 'relative', transition: 'color 0.2s', padding: '4px 0', whiteSpace: 'nowrap' }}>
                    <span style={{ fontSize: 11, marginRight: 4, color: active === f.id ? '#C19D60' : 'rgba(255,255,255,0.2)', fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{f.num}</span>
                    {f.label}
                    {active === f.id && <div style={{ position: 'absolute', bottom: -18, left: '50%', transform: 'translateX(-50%)', fontSize: 13, color: '#C19D60' }}>▾</div>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery grid */}
          <div style={{ columns: '3 300px', gap: 8, orphans: 1, widows: 1 }}>
            {visible.map(item => (
              <GalleryItem key={item.id} item={item} onOpen={() => setLightbox(item)} />
            ))}
          </div>

          {/* Book table now */}
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <button onClick={() => setIsReservationOpen(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 20, padding: '14px 40px', background: '#C19D60', border: 'none', color: '#fff', fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Book table now
            </button>
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX ─────────────────────────────────────────────────── */}
      {lightbox && (
        <div onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.96)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: 24, right: 24, background: 'transparent', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer', lineHeight: 1 }}>✕</button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', position: 'relative' }}>
            <img src={lightbox.src} alt={lightbox.alt} style={{ maxWidth: '90vw', maxHeight: '88vh', objectFit: 'contain', display: 'block', border: '2px solid rgba(255,255,255,0.1)' }} />
            <div style={{ position: 'absolute', bottom: -36, left: 0, right: 0, textAlign: 'center', fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              {lightbox.alt}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function GalleryItem({ item, onOpen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ breakInside: 'avoid', marginBottom: 8, overflow: 'hidden', position: 'relative', cursor: 'pointer', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}>
      <img src={item.src} alt={item.alt}
        style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 1.8s cubic-bezier(.19,1,.22,1)', transform: hovered ? 'scale(1.08)' : 'scale(1)' }} />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.28)', opacity: hovered ? 1 : 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#C19D60', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: hovered ? 'scale(1)' : 'scale(0.1)', opacity: hovered ? 1 : 0, transition: 'all 0.3s', fontSize: 18, color: '#fff' }}>
          🔍
        </div>
      </div>
    </div>
  );
}
