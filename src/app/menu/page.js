'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { menuItems } from '@/lib/data';
import { ShoppingBag } from 'lucide-react';

const tabs = [
  { id: 'all',      num: '01.', label: 'All Items' },
  { id: 'grill',    num: '02.', label: 'Main dishes' },
  { id: 'starters', num: '03.', label: 'Starter' },
  { id: 'desserts', num: '04.', label: 'Desserts' },
  { id: 'coffee',   num: '05.', label: 'Coffee' },
  { id: 'drinks',   num: '06.', label: 'Drinks' },
  { id: 'burgers',  num: '07.', label: 'Burgers' },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('all');
  const { addToCart } = useCart();

  const filtered = activeTab === 'all' ? menuItems : menuItems.filter(m => m.category === activeTab);

  return (
    <>
      {/* ─── PAGE HEADER ─────────────────────────────────────────────── */}
      <div style={{ position: 'relative', minHeight: 370, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', float: 'left', width: '100%', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
        <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0.55 }} />
        <div style={{ position: 'absolute', left: 60, top: 40, width: 70, height: 70, borderLeft: '1px dotted rgba(255,255,255,0.35)', borderTop: '1px dotted rgba(255,255,255,0.35)', zIndex: 5 }} />
        <div style={{ position: 'absolute', right: 60, bottom: 40, width: 70, height: 70, borderRight: '1px dotted rgba(255,255,255,0.35)', borderBottom: '1px dotted rgba(255,255,255,0.35)', zIndex: 5 }} />
        <div style={{ position: 'relative', zIndex: 5, padding: '0 20px' }}>
          <div style={{ fontSize: 10, letterSpacing: 4, color: '#C19D60', marginBottom: 18 }}>●●●●●</div>
          <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: '#C19D60', fontSize: 16, marginBottom: 12 }}>Special menu offers.</h4>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, color: '#fff', marginBottom: 20 }}>Discover Our Menu</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#C19D60' }}>›</span>
            <span style={{ color: '#fff' }}>Menu</span>
          </div>
        </div>
      </div>

      {/* ─── MENU CONTENT ────────────────────────────────────────────── */}
      <section style={{ float: 'left', width: '100%', background: '#292929', padding: '80px 0 60px' }}>
        <div className="container">

          {/* Permanent filter tabs */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ position: 'absolute', top: '50%', left: -160, width: 130, height: 1, borderTop: `1px dotted #C19D60`, transform: 'translateY(-50%)', opacity: 0.5 }} />
              <div style={{ position: 'absolute', top: '50%', right: -160, width: 130, height: 1, borderTop: `1px dotted #C19D60`, transform: 'translateY(-50%)', opacity: 0.5 }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, border: `1px solid #C19D60`, background: 'rgba(193,157,96,0.05)', padding: '18px 22px' }}>
                {tabs.map(t => (
                  <button key={t.id} onClick={() => setActiveTab(t.id)}
                    style={{ margin: '0 16px', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 16, color: activeTab === t.id ? '#C19D60' : 'rgba(255,255,255,0.55)', fontWeight: activeTab === t.id ? 700 : 400, position: 'relative', transition: 'color 0.2s', padding: '4px 0', whiteSpace: 'nowrap' }}>
                    <span style={{ fontSize: 10, marginRight: 4, fontFamily: "'Poppins', sans-serif", color: activeTab === t.id ? '#C19D60' : 'rgba(255,255,255,0.25)', fontWeight: 400 }}>{t.num}</span>
                    {t.label}
                    {activeTab === t.id && <div style={{ position: 'absolute', bottom: -18, left: '50%', transform: 'translateX(-50%)', fontSize: 13, color: '#C19D60' }}>▾</div>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Items grid – 2 columns, reference-style list */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 60px', maxWidth: 1100, margin: '0 auto' }}>
            {filtered.map((item) => (
              <MenuItem key={item.id} item={item} onAdd={() => addToCart(item)} />
            ))}
          </div>

          {/* PDF download */}
          <div style={{ textAlign: 'right', marginTop: 50, paddingTop: 30, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <a href="#" style={{ fontFamily: "'Playfair Display', cursive", color: 'rgba(255,255,255,0.7)', paddingBottom: 4, borderBottom: '1px dotted rgba(255,255,255,0.3)', fontSize: 15, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
              Download menu in PDF ↓
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function MenuItem({ item, onAdd }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ marginBottom: 8, position: 'relative', minHeight: 86, paddingLeft: 96, paddingRight: 10, paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

      {/* Circular image */}
      <div style={{ position: 'absolute', left: 0, top: 4, width: 74, height: 74, borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)', cursor: 'pointer', flexShrink: 0 }}>
        <img src={item.image} alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s', transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=80&h=80&fit=crop'; }} />
        {hovered && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 18 }}>+</span>
          </div>
        )}
      </div>

      {/* Name + Price */}
      <div style={{ overflow: 'hidden', marginBottom: 0 }}>
        <h6 style={{ float: 'left', color: '#fff', fontSize: 15, fontWeight: 600, fontFamily: "'Poppins', sans-serif", margin: 0 }}>
          {item.name}
          {item.badge && (
            <span style={{ marginLeft: 8, fontSize: 9, background: '#C19D60', color: '#fff', padding: '2px 6px', fontFamily: "'Poppins', sans-serif" }}>{item.badge}</span>
          )}
        </h6>
        <div style={{ float: 'right', fontFamily: "'Playfair Display', cursive", fontSize: 18, color: '#C19D60', fontWeight: 600 }}>{item.price}</div>
        <div style={{ clear: 'both' }} />
      </div>

      {/* Dotted separator */}
      <div style={{ borderBottom: '1px dotted rgba(255,255,255,0.12)', margin: '5px 0 7px' }} />

      {/* Description */}
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, paddingBottom: 0, lineHeight: 1.75, textAlign: 'left' }}>
        {item.description}
      </p>

      {/* Add to Cart – appears on hover */}
      {hovered && (
        <button onClick={onAdd}
          style={{ marginTop: 8, padding: '6px 14px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontSize: 11, fontFamily: "'Playfair Display', cursive", cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#C19D60'; e.currentTarget.style.borderColor = '#C19D60'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
          <ShoppingBag size={11} /> Add To Cart
        </button>
      )}
    </div>
  );
}
