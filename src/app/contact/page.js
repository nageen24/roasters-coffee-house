'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const GOLD = '#C19D60';

function useParallax(speed = 0.22) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const bg = el.querySelector('.par-bg');
      if (bg) bg.style.transform = `translateY(${-el.getBoundingClientRect().top * speed}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);
  return ref;
}

const contactInfo = {
  mail: 'info@roasterscoffeehouse.pk',
  phone: '+92 51 272 6861',
  address: 'Plot No. 1, First Floor, Agha Khan Road, F-6 Markaz, Islamabad',
};

const hours = [
  { days: 'Monday – Thursday', open: '12:00 PM', close: '11:30 PM' },
  { days: 'Friday – Saturday', open: '12:00 PM', close: '12:00 AM' },
  { days: 'Sunday', open: '11:00 AM', close: '11:30 PM' },
];

const subjectOpts = ['Any', 'Upcoming Events', 'Book table', 'Banquet', 'Other'];

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', email: '', phone: '', message: '' });
  const [subject, setSubject] = useState('');
  const [sent, setSent] = useState(false);
  const hoursRef = useParallax(0.22);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ firstName: '', email: '', phone: '', message: '' });
      setSubject('');
    }, 4000);
  };

  const inputStyle = {
    display: 'block', width: '100%', height: 50,
    border: '1px solid rgba(255,255,255,0.1)', background: '#292929',
    padding: '0 18px', fontFamily: "'Poppins', sans-serif",
    fontSize: 12, outline: 'none', boxSizing: 'border-box',
    color: '#fff', marginBottom: 12, transition: 'border-color 0.2s',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C19D60' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    backgroundSize: '12px',
    backgroundClip: 'padding-box',
    paddingRight: 36,
  };

  const focusStyle = { borderColor: GOLD };
  const blurStyle = { borderColor: 'rgba(255,255,255,0.1)' };

  return (
    <>
      {/* ─── PAGE HEADER ──────────────────────────────────────────────── */}
      <div style={{ position: 'relative', minHeight: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', float: 'left', width: '100%', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
        <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0.5 }} />
        <div style={{ position: 'absolute', left: 50, top: 30, width: 60, height: 60, borderLeft: '1px dotted rgba(255,255,255,0.3)', borderTop: '1px dotted rgba(255,255,255,0.3)', zIndex: 5 }} />
        <div style={{ position: 'absolute', right: 50, bottom: 30, width: 60, height: 60, borderRight: '1px dotted rgba(255,255,255,0.3)', borderBottom: '1px dotted rgba(255,255,255,0.3)', zIndex: 5 }} />
        <div style={{ position: 'relative', zIndex: 5, padding: '0 20px' }}>
          <div style={{ fontSize: 10, letterSpacing: 4, color: GOLD, marginBottom: 16 }}>●●●●●</div>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 'clamp(28px,5vw,50px)', fontWeight: 900, color: '#fff', marginBottom: 15, lineHeight: 1.2 }}>Contact Us</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: GOLD }}>›</span>
            <span style={{ color: '#fff' }}>Contact</span>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTACT SECTION ────────────────────────────────────── */}
      <section style={{ float: 'left', width: '100%', background: '#292929', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', minHeight: 680 }}>

          {/* ── LEFT: Form ──────────────────────────────────────────── */}
          <div style={{ flex: '0 0 58%', padding: '80px 60px 80px 5%', maxWidth: '58%', boxSizing: 'border-box' }}>
            <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: GOLD, fontSize: 18, marginBottom: 10 }}>Get in touch</h4>
            <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 28, fontWeight: 900, color: '#ddd', marginBottom: 30 }}>Send us a Message</h2>

            {sent ? (
              <div style={{ padding: '22px 28px', background: '#f9f9f9', border: `1px solid ${GOLD}`, fontFamily: "'Playfair Display', cursive", color: GOLD, fontSize: 16 }}>
                ✓ Your message has been sent! We&apos;ll reply within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Row 1: First Name */}
                <input type="text" placeholder="First Name" required value={form.firstName}
                  onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, blurStyle)} />

                {/* Row 2: Email */}
                <input type="email" placeholder="Email Address" required value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, blurStyle)} />

                {/* Row 3: Phone */}
                <input type="tel" placeholder="Phone Number" value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, blurStyle)} />

                {/* Row 4: Subject dropdown */}
                <select value={subject} onChange={e => setSubject(e.target.value)} required style={selectStyle}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, blurStyle)}>
                  <option value="" disabled>Subject</option>
                  {subjectOpts.map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                {/* Row 5: Message */}
                <textarea placeholder="Your Message" required rows={4} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, height: 'auto', minHeight: 90, padding: '14px 18px', resize: 'vertical', marginBottom: 20, colorScheme: 'dark' }}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, blurStyle)} />

                <button type="submit"
                  style={{ padding: '14px 44px', background: '#C19D60', border: 'none', color: '#fff', fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 500, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 20, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = GOLD}
                  onMouseLeave={e => e.currentTarget.style.background = '#292929'}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT: Opening Hours parallax ──────────────────────── */}
          <div ref={hoursRef} style={{ flex: '0 0 42%', maxWidth: '42%', position: 'relative', overflow: 'hidden', minHeight: 600 }}>
            <div className="par-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: '-15%', left: 0, right: 0, height: '130%', zIndex: 0, transition: 'transform 0s linear' }} />
            <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0.5, zIndex: 1 }} />
            <div style={{ position: 'relative', zIndex: 5, padding: '80px 50px', height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'absolute', top: 30, left: 30, right: 30, bottom: 30, border: `1px dashed rgba(193,157,96,0.3)`, zIndex: 2 }} />
              <div style={{ width: '100%', textAlign: 'center', position: 'relative', zIndex: 3 }}>
                <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: GOLD, fontSize: 16, marginBottom: 12 }}>Call For Reservations</h4>
                <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 26, fontWeight: 900, color: '#fff', marginBottom: 40 }}>Opening Hours</h2>
                {hours.map((h, i) => (
                  <div key={i} style={{ marginBottom: 26 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: GOLD, fontSize: 13, fontWeight: 400, marginBottom: 10 }}>{h.days}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 22, color: '#fff', letterSpacing: 2 }}>{h.open}</span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {[3, 4, 7, 4, 3].map((h2, j) => <div key={j} style={{ width: 2, height: h2, background: j === 2 ? GOLD : 'rgba(255,255,255,0.25)', borderRadius: 1 }} />)}
                      </div>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 22, color: '#fff', letterSpacing: 2 }}>{h.close}</span>
                    </div>
                    {i < hours.length - 1 && <div style={{ width: '50%', margin: '18px auto 0', height: 1, background: 'rgba(255,255,255,0.07)' }} />}
                  </div>
                ))}
                <div style={{ marginTop: 30 }}>
                  <a href={`tel:${contactInfo.phone}`}
                    style={{ display: 'inline-block', fontSize: 18, fontWeight: 700, padding: '10px 18px', border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Playfair Display', cursive", textDecoration: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD; }}>
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP ──────────────────────────────────────────────────────── */}
      <section style={{ float: 'left', width: '100%', padding: 0, display: 'block', position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.7303!2d73.0769973!3d33.7305564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf85d7ad9c6b%3A0xa3d973371987487e!2sRoasters%20Coffee%20House%20%26%20Grill!5e0!3m2!1sen!2spk!4v1700000000001"
          width="100%" height="480" style={{ border: 0, display: 'block' }}
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          title="Roasters Coffee House F-6 Islamabad"
        />
        {/* Address overlay bar */}
        <div style={{ background: '#292929', padding: '18px 5%', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
          {[
            { label: 'Phone', value: contactInfo.phone },
            { label: 'Email', value: contactInfo.mail },
            { label: 'Address', value: contactInfo.address },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: GOLD, flexShrink: 0, paddingTop: 1 }}>{label} :</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{value}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
