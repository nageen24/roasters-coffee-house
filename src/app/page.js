'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { restaurantInfo, menuItems } from '@/lib/data';
import { Play, ChevronRight, ChevronLeft, Star } from 'lucide-react';

const GOLD = '#C19D60';

// ─── PARALLAX HOOK ───────────────────────────────────────────────────────
function useParallax(speed = 0.25) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bg = el.querySelector('.par-elem');
    if (!bg) return;
    const onScroll = () => { bg.style.transform = `translateY(${-el.getBoundingClientRect().top * speed}px)`; };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);
  return ref;
}

// ─── HERO ────────────────────────────────────────────────────────────────
// Each slide has its own background: food/restaurant Unsplash photos + a video fallback
const slides = [
  {
    label: 'Top Services and Premium Cuisine',
    title: 'Welcome to Roasters\nCoffee House',
    btn: 'Check out our Menu',
    href: '/menu',
    bg: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=90',
    video: 'https://www.pexels.com/video/852395/video-file.mp4',
  },
  {
    label: 'Finest Grill & Coffee Experience',
    title: 'Taste the Art of\nReal Cooking',
    btn: 'Explore Our Menu',
    href: '/menu',
    bg: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1800&q=90',
    video: null,
  },
  {
    label: 'Award Winning Restaurant',
    title: 'A Journey of\nFlavour & Aroma',
    btn: 'Book a Table',
    href: '#',
    bg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=90',
    video: null,
  },
];

function HeroSection({ onVideoOpen }) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', background: '#111', float: 'left', padding: 0 }}>
      {/* Background image — changes per slide */}
      {slides.map((sl, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${sl.bg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: slide === i ? 1 : 0,
          transition: 'opacity 1.4s ease-in-out',
          zIndex: 0,
        }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.48)', zIndex: 2 }} />

      {/* Corner decorations */}
      {[
        { left: 70, top: 50, borderLeft: `1px dotted rgba(255,255,255,0.38)`, borderTop: `1px dotted rgba(255,255,255,0.38)` },
        { left: 70, bottom: 50, borderLeft: `1px dotted rgba(255,255,255,0.38)`, borderBottom: `1px dotted rgba(255,255,255,0.38)` },
        { right: 70, top: 50, borderRight: `1px dotted rgba(255,255,255,0.38)`, borderTop: `1px dotted rgba(255,255,255,0.38)` },
        { right: 70, bottom: 50, borderRight: `1px dotted rgba(255,255,255,0.38)`, borderBottom: `1px dotted rgba(255,255,255,0.38)` },
      ].map((s, i) => <div key={i} style={{ position: 'absolute', width: 80, height: 80, zIndex: 10, ...s }} />)}

      {/* Social sidebar */}
      <ul style={{ position: 'absolute', left: 50, top: '42%', width: 50, zIndex: 11, listStyle: 'none', padding: 0, margin: 0 }} className="hero-side-social">
        {[['Fb', restaurantInfo.social.facebook], ['Tw', restaurantInfo.social.twitter], ['In', restaurantInfo.social.instagram]].map(([s, href], i) => (
          <li key={i}>
            <a href={href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50, color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderTop: i === 0 ? '1px solid rgba(255,255,255,0.2)' : 'none', background: 'rgba(255,255,255,0.08)', fontSize: 11, fontFamily: "'Playfair Display', cursive", transition: 'background 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}>
              {s}
            </a>
          </li>
        ))}
      </ul>

      {/* Slide content */}
      <div style={{ position: 'absolute', top: '34%', left: 0, right: 0, zIndex: 10, padding: '0 5%' }}>
        <div style={{ float: 'left', maxWidth: 760 }}>
          <div style={{ fontSize: 10, letterSpacing: 4, color: GOLD, marginBottom: 18 }}>●●●●●</div>
          <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', fontSize: 17, color: '#fff', paddingBottom: 18 }}>{slides[slide].label}</h4>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", color: '#fff', fontWeight: 800, fontSize: 'clamp(30px, 4.8vw, 56px)', lineHeight: 1.22, marginBottom: 40, whiteSpace: 'pre-line' }}>{slides[slide].title}</h2>
          <Link href={slides[slide].href}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 30, padding: '14px 20px', background: 'rgba(255,255,255,0.1)', border: '1px solid #fff', color: '#fff', fontFamily: "'Playfair Display', cursive", fontWeight: 600, fontSize: 13, textDecoration: 'none', transition: 'all 200ms linear', float: 'left' }}
            onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.borderColor = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#fff'; }}>
            {slides[slide].btn} <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {/* Promo video trigger */}
      <div style={{ position: 'absolute', top: '50%', right: '5%', zIndex: 20, transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: 20 }} className="hero-side-social">
        <button onClick={onVideoOpen}
          style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.28)', boxShadow: '0 0 0 9px rgba(255,255,255,0.18)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.boxShadow = `0 0 0 14px rgba(193,157,96,0.2)`; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.28)'; e.currentTarget.style.boxShadow = '0 0 0 9px rgba(255,255,255,0.18)'; }}>
          <Play size={14} fill="#fff" />
        </button>
        <div style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: '#fff', fontSize: 14 }}>View Promo Video</div>
      </div>

      {/* Slide dots */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', gap: 10 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)}
            style={{ width: i === slide ? 26 : 8, height: 8, borderRadius: 4, background: i === slide ? GOLD : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
        ))}
      </div>

      {/* Left / Right arrows */}
      {[
        { s: { left: 30 }, fn: () => setSlide(s => (s - 1 + slides.length) % slides.length), ic: <ChevronLeft size={18} /> },
        { s: { right: 30 }, fn: () => setSlide(s => (s + 1) % slides.length), ic: <ChevronRight size={18} /> },
      ].map(({ s, fn, ic }, i) => (
        <button key={i} onClick={fn}
          style={{ position: 'absolute', top: '50%', marginTop: -25, zIndex: 20, width: 50, height: 50, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', ...s }}
          onMouseEnter={e => e.currentTarget.style.background = GOLD}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}>
          {ic}
        </button>
      ))}
      <style>{`@media (max-width:1064px){.hero-side-social{display:none!important}}`}</style>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section style={{ background: '#292929', padding: '100px 0', float: 'left', width: '100%' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ textAlign: 'left', paddingRight: 40 }}>
            <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: GOLD, fontSize: 18, paddingBottom: 10 }}>Our story</h4>
            <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 30, fontWeight: 900, color: '#fff', marginBottom: 6 }}>Few words about us</h2>
            <div style={{ margin: '10px 0 24px' }}><span style={{ fontSize: 7, letterSpacing: 4, color: 'rgba(255,255,255,0.3)' }}>●●●●●●</span></div>
            <p style={{ color: 'rgba(255,255,255,0.65)', textAlign: 'left', lineHeight: 1.9, marginBottom: 8 }}>{restaurantInfo.description}</p>
            <Link href="/menu"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 30, padding: '14px 20px 14px 35px', background: GOLD, color: '#fff', fontFamily: "'Playfair Display', cursive", fontWeight: 500, fontSize: 13, marginTop: 18, textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Explore Our Menu <ChevronRight size={16} />
            </Link>
          </div>
          <div style={{ overflow: 'hidden', boxShadow: '0 14px 30px rgba(0,0,0,0.4)' }}>
            <img src="/images/about/aboutimg.png" alt="About Roasters" style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MENU SECTION ────────────────────────────────────────────────────────
const menuTabs = [
  { label: 'Main dishes', cat: 'grill' },
  { label: 'Starter',     cat: 'starters' },
  { label: 'Desserts',    cat: 'desserts' },
  { label: 'Sea Food',    cat: 'seafood' },
  { label: 'Drinks',      cat: 'drinks' },
];

function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  const items = menuItems.filter(m => m.category === menuTabs[activeTab].cat).slice(0, 4);

  return (
    <section style={{
      float: 'left', width: '100%', position: 'relative',
      padding: '110px 0 90px',
      backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=1800&q=80)',
      backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
    }}>
      {/* Overlay — reduced so background is more visible */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.72)', zIndex: 1 }} />
      <div style={{ position: 'absolute', left: 50, top: 40, width: 70, height: 70, borderLeft: '1px dotted rgba(255,255,255,0.12)', borderTop: '1px dotted rgba(255,255,255,0.12)', zIndex: 3 }} />
      <div style={{ position: 'absolute', right: 50, bottom: 40, width: 70, height: 70, borderRight: '1px dotted rgba(255,255,255,0.12)', borderBottom: '1px dotted rgba(255,255,255,0.12)', zIndex: 3 }} />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: GOLD, fontSize: 18, paddingBottom: 10 }}>Special menu offers.</h4>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 'clamp(24px,3.5vw,34px)', fontWeight: 900, color: '#fff' }}>Enjoy Restaurants Specialties</h2>
          <div style={{ margin: '12px 0' }}><span style={{ fontSize: 7, letterSpacing: 4, color: 'rgba(255,255,255,0.2)' }}>●●●●●●</span></div>
        </div>

        {/* tabs left | items right */}
        <div style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: '0 60px', alignItems: 'start' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: 24 }}>
            {menuTabs.map((tab, i) => (
              <li key={i} onClick={() => setActiveTab(i)}
                style={{ fontFamily: "'Playfair Display', cursive", fontSize: 16, color: activeTab === i ? '#fff' : 'rgba(255,255,255,0.38)', marginBottom: 28, cursor: 'pointer', transition: 'color 0.22s', display: 'flex', alignItems: 'center', gap: 8, position: 'relative', paddingLeft: 4 }}>
                {activeTab === i && <div style={{ position: 'absolute', left: -22, top: '50%', transform: 'translateY(-50%)', width: 12, height: 1, background: GOLD }} />}
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: activeTab === i ? GOLD : 'rgba(255,255,255,0.2)', minWidth: 22 }}>0{i + 1}.</span>
                {tab.label}
                {activeTab === i && <span style={{ position: 'absolute', right: -30, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.25)', fontSize: 18 }}>›</span>}
              </li>
            ))}
          </ul>

          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 50px' }}>
              {items.length > 0 ? items.map((item, i) => (
                <div key={item.id} style={{ paddingBottom: 22, borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 22 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, overflow: 'hidden' }}>
                    <h6 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: '#fff', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <span style={{ fontFamily: "'Playfair Display', cursive", fontSize: 10, color: 'rgba(255,255,255,0.25)', marginRight: 6 }}>0{i + 1}.</span>
                      {item.name}
                    </h6>
                    <span style={{ fontFamily: "'Playfair Display', cursive", fontSize: 16, color: GOLD, fontWeight: 700, flexShrink: 0 }}>{item.price}</span>
                  </div>
                  <div style={{ borderBottom: '1px dotted rgba(255,255,255,0.1)', margin: '6px 0 8px' }} />
                  <p style={{ fontFamily: "'Poppins', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: 11.5, lineHeight: 1.85, margin: 0, paddingBottom: 0 }}>{item.description}</p>
                </div>
              )) : (
                <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Playfair Display', cursive", fontSize: 14, gridColumn: '1/-1' }}>Coming soon…</p>
              )}
            </div>

            {/* CTAs — left-aligned under the items */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 30, marginTop: 36, flexWrap: 'wrap' }}>
              <Link href="/menu"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 24, padding: '13px 20px 13px 32px', background: GOLD, border: `1px solid ${GOLD}`, color: '#fff', fontFamily: "'Playfair Display', cursive", fontWeight: 600, fontSize: 13, textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                View Full Menu <ChevronRight size={14} />
              </Link>
              <a href="#"
                style={{ fontFamily: "'Playfair Display', cursive", color: 'rgba(255,255,255,0.5)', fontSize: 14, textDecoration: 'none', borderBottom: '1px dotted rgba(255,255,255,0.3)', paddingBottom: 2, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── OPENING HOURS ───────────────────────────────────────────────────────
function OpeningHoursSection() {
  return (
    <section style={{ padding: 0, float: 'left', width: '100%', position: 'relative', minHeight: 560, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: '50%', height: '100%', zIndex: 1, backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
      <div style={{ position: 'absolute', left: 0, top: 0, width: '50%', height: '100%', background: 'rgba(0,0,0,0.38)', zIndex: 2 }} />
      <div style={{ float: 'right', width: '50%', position: 'relative', padding: '110px 50px', zIndex: 5, background: '#292929' }}>
        <div style={{ position: 'absolute', top: 40, left: 40, right: 40, bottom: 40, border: `1px dashed rgba(193,157,96,0.2)`, pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ maxWidth: 500, margin: '0 auto', position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', fontSize: 18, color: GOLD, paddingBottom: 10 }}>Call For Reservations</h4>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 30, fontWeight: 900, color: '#fff', marginBottom: 42 }}>Opening Hours</h2>
          {restaurantInfo.hours.map((h, i) => (
            <div key={i} style={{ marginBottom: 30 }}>
              <h3 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: GOLD, fontSize: 13, fontWeight: 400, marginBottom: 10 }}>{h.days}</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 28, color: '#fff', letterSpacing: 2 }}>{h.open}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                  {[3, 5, 8, 5, 3].map((h2, j) => <div key={j} style={{ width: 2, height: h2, background: j === 2 ? GOLD : 'rgba(255,255,255,0.22)', borderRadius: 1 }} />)}
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 28, color: '#fff', letterSpacing: 2 }}>{h.close}</span>
              </div>
              {i < restaurantInfo.hours.length - 1 && <div style={{ width: '45%', margin: '22px auto 0', height: 1, background: 'rgba(255,255,255,0.07)' }} />}
            </div>
          ))}
          <div style={{ marginTop: 36 }}>
            <a href={`tel:${restaurantInfo.locations[0].phone}`}
              style={{ display: 'inline-block', fontFamily: "'Playfair Display', cursive", fontSize: 22, fontWeight: 700, padding: '10px 26px', border: `1px solid ${GOLD}`, color: GOLD, textDecoration: 'none', letterSpacing: 1, transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD; }}>
              {restaurantInfo.locations[0].phone}
            </a>
          </div>
        </div>
      </div>
      <div style={{ float: 'left', width: '50%', minHeight: 560 }} />
    </section>
  );
}

// ─── FEATURES ────────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    { num: '01.', title: 'Daily New Fresh Menus',        sub: 'Start eating better',   desc: 'We craft new seasonal specials every day using the freshest local produce. Each dish is a celebration of flavour and quality.',         img: '/feature-1.png' },
    { num: '02.', title: 'Fresh Ingredient, Tasty Meals', sub: 'Quality is the heart',  desc: 'Every ingredient is hand-selected for peak freshness. From farm to plate, we never compromise on quality or nutrition.',              img: '/feature-2.png' },
    { num: '03.', title: 'Creative & Talented Chefs',    sub: 'Hot & ready to serve',  desc: 'Our award-winning chefs bring decades of culinary expertise to your table, creating unforgettable dining experiences.',                img: '/feature-3.png' },
  ];
  return (
    <section style={{ background: '#292929', padding: '100px 0', float: 'left', width: '100%' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: GOLD, fontSize: 18, paddingBottom: 10 }}>Why people choose us</h4>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 30, fontWeight: 900, color: '#fff' }}>Prepare for first-class service</h2>
          <div style={{ margin: '10px 0' }}><span style={{ fontSize: 7, letterSpacing: 4, color: 'rgba(255,255,255,0.25)' }}>●●●●●●</span></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {features.map((f, i) => <FlipCard key={i} feature={f} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <Link href="/menu"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 30, padding: '14px 20px 14px 35px', background: GOLD, color: '#fff', fontFamily: "'Playfair Display', cursive", fontWeight: 500, fontSize: 13, textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Read More About us <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FlipCard({ feature }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ perspective: 1000, cursor: 'pointer', aspectRatio: '1 / 1', minHeight: 280 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        transformStyle: 'preserve-3d',
        transition: '0.85s cubic-bezier(0.68,-0.55,0.265,1.55)',
        transform: hovered ? 'rotateY(-180deg)' : 'none',
      }}>

        {/* ── FRONT: image + gradient overlay + text ── */}
        <div style={{
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          position: 'absolute', inset: 0, overflow: 'hidden',
        }}>
          {/* The PNG image fills the card exactly */}
          <img
            src={feature.img}
            alt={feature.title}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          {/* Bottom-heavy gradient so text stays readable without hiding the image */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.10) 100%)',
          }} />
          {/* Corner decorations */}
          <div style={{ position: 'absolute', top: 16, left: 16, width: 44, height: 44, borderLeft: `1px dotted rgba(193,157,96,0.6)`, borderTop: `1px dotted rgba(193,157,96,0.6)`, zIndex: 3 }} />
          <div style={{ position: 'absolute', bottom: 16, right: 16, width: 44, height: 44, borderRight: `1px dotted rgba(193,157,96,0.6)`, borderBottom: `1px dotted rgba(193,157,96,0.6)`, zIndex: 3 }} />
          {/* Card number — top left */}
          <div style={{ position: 'absolute', top: 22, left: 24, color: 'rgba(255,255,255,0.5)', fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', fontSize: 15, zIndex: 4 }}>{feature.num}</div>
          {/* Title + subtitle pinned to bottom */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 22px 22px', zIndex: 4, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: GOLD, textTransform: 'uppercase', letterSpacing: 2.5, fontWeight: 700, marginBottom: 8 }}>{feature.sub}</div>
            <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1.3, margin: 0 }}>{feature.title}</h2>
          </div>
        </div>

        {/* ── BACK: gold with full description ── */}
        <div style={{
          position: 'absolute', inset: 0, background: GOLD,
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '36px 28px', textAlign: 'center',
        }}>
          <div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', letterSpacing: 2.5, fontWeight: 700, marginBottom: 14 }}>{feature.sub}</div>
            <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 18, fontWeight: 800, color: '#fff', paddingBottom: 16, lineHeight: 1.35 }}>{feature.title}</h2>
            <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 12, lineHeight: 1.9 }}>{feature.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── REVIEWS ─────────────────────────────────────────────────────────────
const reviews = [
  { name: 'Sarah Khan',      role: 'Google Review',   stars: 5, text: '"Absolutely amazing experience! The coffee is exceptional and the grilled dishes are perfectly cooked. The ambiance is warm and inviting — Roasters has truly become my favourite spot in Islamabad."', initial: 'S' },
  { name: 'Ahmed Raza',      role: 'Google Review',   stars: 5, text: '"Best coffee house in F-6! Their signature blend is something else entirely. The steaks are tender and juicy. Excellent service too — the staff are very attentive and friendly throughout."',    initial: 'A' },
  { name: 'Maria Hassan',    role: 'Google Review',   stars: 5, text: '"A wonderful dining experience from start to finish. The grilled items are consistently delicious and the coffee is world class. Highly recommended for business lunches and family dinners."',   initial: 'M' },
  { name: 'Bilal Siddiqui',  role: 'Google Review',   stars: 4, text: '"One of Islamabad\'s finest restaurants. The food quality is consistently high and the interiors are stunning. The Roasters Signature Blend is a must-try. Will definitely be back."',          initial: 'B' },
  { name: 'Usman Ali',       role: 'Google Review',   stars: 5, text: '"From the moment you walk in, you feel the quality. The coffee is brewed to perfection and the grill menu is extensive and delicious. Staff go out of their way to make you feel welcome."',         initial: 'U' },
  { name: 'Fatima Khalid',   role: 'Google Review',   stars: 5, text: '"I have been coming here for over a year and the quality never drops. The freshly-ground espresso is world class and the lunch specials are consistently excellent. My go-to place in F-6."',      initial: 'F' },
  { name: 'Zara Mahmood',    role: 'Google Review',   stars: 4, text: '"Great ambiance, great food and great coffee. The grill section is particularly impressive. Their burgers and steaks are cooked perfectly every time. Prices are very fair for the quality."',       initial: 'Z' },
  { name: 'Omar Shaikh',     role: 'Google Review',   stars: 5, text: '"Roasters is simply the best coffee and grill experience in the city. Every visit feels special — from the aromatic coffee to the perfectly cooked grilled dishes. Highly recommend!"',            initial: 'O' },
];

function ReviewsSection() {
  const [startIdx, setStartIdx] = useState(0);
  const perPage = 3;
  const total = reviews.length;
  const canPrev = startIdx > 0;
  const canNext = startIdx + perPage < total;

  const visible = reviews.slice(startIdx, startIdx + perPage);

  const prev = () => { if (canPrev) setStartIdx(i => i - 1); };
  const next = () => { if (canNext) setStartIdx(i => i + 1); };

  return (
    <section style={{ background: '#212121', padding: '100px 0', float: 'left', width: '100%' }}>
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: GOLD, fontSize: 18, paddingBottom: 10 }}>What said about us</h4>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 30, fontWeight: 900, color: '#ddd' }}>Customer Reviews</h2>
          <div style={{ margin: '10px 0' }}><span style={{ fontSize: 7, letterSpacing: 4, color: '#ddd' }}>●●●●●●</span></div>
        </div>

        {/* Cards row + arrows */}
        <div style={{ position: 'relative' }}>
          {/* Prev arrow */}
          <button onClick={prev}
            style={{ position: 'absolute', left: -30, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 46, height: 46, borderRadius: '50%', background: canPrev ? '#292929' : '#e0e0e0', border: 'none', color: '#fff', cursor: canPrev ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            onMouseEnter={e => { if (canPrev) e.currentTarget.style.background = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.background = canPrev ? '#292929' : '#e0e0e0'; }}>
            <ChevronLeft size={18} />
          </button>

          {/* Three cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {visible.map((r, i) => (
              <div key={startIdx + i}
                style={{ padding: '40px 28px 44px', background: '#292929', border: '1px solid #ebebeb', position: 'relative', transition: 'box-shadow 0.3s', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'}>
                {/* Decorative quote */}
                <div style={{ position: 'absolute', top: 16, left: 22, fontFamily: "'Playfair Display', cursive", fontSize: 72, color: '#f0f0f0', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>"</div>
                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 18, position: 'relative', zIndex: 2 }}>
                  {[...Array(r.stars)].map((_, j) => <Star key={j} size={13} fill={GOLD} color={GOLD} />)}
                  {[...Array(5 - r.stars)].map((_, j) => <Star key={`e${j}`} size={13} fill="#e0e0e0" color="#e0e0e0" />)}
                </div>
                {/* Review text */}
                <p style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: '#666', fontSize: 13, lineHeight: 1.9, paddingBottom: 0, marginBottom: 18, position: 'relative', zIndex: 2, minHeight: 110 }}>{r.text}</p>
                {/* Dots divider */}
                <div style={{ fontSize: 7, letterSpacing: 4, color: '#ddd', marginBottom: 18 }}>●●●</div>
                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', cursive", fontSize: 17, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                    {r.initial}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 700, color: '#ddd' }}>{r.name}</div>
                    <div style={{ fontSize: 10, color: GOLD, fontFamily: "'Poppins', sans-serif", letterSpacing: 0.5 }}>{r.role}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', fontSize: 24, color: '#e8e8e8', fontWeight: 700 }}>0{startIdx + i + 1}.</div>
                </div>
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button onClick={next}
            style={{ position: 'absolute', right: -30, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 46, height: 46, borderRadius: '50%', background: canNext ? '#292929' : '#e0e0e0', border: 'none', color: '#fff', cursor: canNext ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            onMouseEnter={e => { if (canNext) e.currentTarget.style.background = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.background = canNext ? '#292929' : '#e0e0e0'; }}>
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Progress dots */}
        <div style={{ textAlign: 'center', marginTop: 36, display: 'flex', gap: 8, justifyContent: 'center' }}>
          {Array.from({ length: total - perPage + 1 }).map((_, i) => (
            <button key={i} onClick={() => setStartIdx(i)}
              style={{ width: i === startIdx ? 24 : 8, height: 8, borderRadius: 4, background: i === startIdx ? GOLD : '#ddd', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── VIDEO MODAL ─────────────────────────────────────────────────────────
function VideoModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={onClose} style={{ position: 'absolute', top: 24, right: 24, background: 'transparent', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer' }}>✕</button>
      <div onClick={e => e.stopPropagation()} style={{ width: '80vw', maxWidth: 900, aspectRatio: '16/9', background: '#000' }}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Promo" frameBorder="0" allowFullScreen allow="autoplay; encrypted-media" style={{ display: 'block' }} />
      </div>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <HeroSection onVideoOpen={() => setVideoOpen(true)} />
      <AboutSection />
      <MenuSection />
      <OpeningHoursSection />
      <FeaturesSection />
      <ReviewsSection />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
