'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function useCountdown(target) {
  const [diff, setDiff] = useState(target - Date.now());
  useEffect(() => {
    const t = setInterval(() => setDiff(target - Date.now()), 1000);
    return () => clearInterval(t);
  }, [target]);
  const d = Math.max(0, Math.floor(diff / 86400000));
  const h = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  const m = Math.max(0, Math.floor((diff % 3600000) / 60000));
  const s = Math.max(0, Math.floor((diff % 60000) / 1000));
  return { d, h, m, s };
}

export default function ComingSoon() {
  const target = new Date('2025-08-01').getTime();
  const { d, h, m, s } = useCountdown(target);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'fixed', inset: 0, background: '#000', opacity: 0.8, zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 5, maxWidth: 700 }}>
        <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 26, fontWeight: 900, color: '#fff', letterSpacing: 4, marginBottom: 8 }}>
          ROASTERS
        </div>
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, color: '#C19D60', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 50 }}>
          COFFEE HOUSE & GRILL
        </div>

        <div style={{ fontSize: 9, letterSpacing: 4, color: 'rgba(255,255,255,0.5)', marginBottom: 25 }}>● ● ● ● ●</div>

        <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 54, fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
          Something new is coming
        </h2>
        <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 50 }}>
          We&apos;re preparing something extraordinary for you. Stay tuned!
        </h4>

        {/* Countdown */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 30, marginBottom: 50 }}>
          {[
            { v: d, l: 'Days' },
            { v: h, l: 'Hours' },
            { v: m, l: 'Minutes' },
            { v: s, l: 'Seconds' },
          ].map(({ v, l }, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 56, fontWeight: 900, color: '#fff', lineHeight: 1, minWidth: 80 }}>
                {String(v).padStart(2, '0')}
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 2, marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Subscribe */}
        {!sent ? (
          <div style={{ display: 'flex', maxWidth: 500, margin: '0 auto 30px' }}>
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, height: 52, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', borderRight: 'none', padding: '0 20px', color: '#fff', fontFamily: "'Poppins', sans-serif", fontSize: 13, outline: 'none' }} />
            <button onClick={() => { if (email) { setSent(true); } }}
              style={{ height: 52, padding: '0 28px', background: '#C19D60', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}>
              Notify Me
            </button>
          </div>
        ) : (
          <p style={{ color: '#C19D60', fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', fontSize: 16, marginBottom: 30 }}>
            ✓ Thank you! We&apos;ll notify you when we launch.
          </p>
        )}

        <Link href="/" style={{ fontFamily: "'Playfair Display', cursive", color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none', borderBottom: '1px dotted rgba(255,255,255,0.3)', transition: 'color 0.2s' }}>
          ← Go back Home
        </Link>
      </div>
    </div>
  );
}
