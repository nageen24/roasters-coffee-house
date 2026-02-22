'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ChevronRight } from 'lucide-react';

/* ── shared input/select style for dark form ── */
const fieldStyle = {
  display: 'block',
  width: '100%',
  height: 50,
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(255,255,255,0.06)',
  padding: '0 18px',
  fontFamily: "'Poppins', sans-serif",
  fontSize: 12,
  color: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, background 0.2s',
  colorScheme: 'dark',
};

const selectStyle = {
  ...fieldStyle,
  cursor: 'pointer',
  appearance: 'none',
  WebkitAppearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c4954a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  paddingRight: 36,
};

const labelStyle = {
  display: 'block',
  fontSize: 10,
  color: 'rgba(255,255,255,0.45)',
  textTransform: 'uppercase',
  letterSpacing: 2,
  marginBottom: 6,
  fontFamily: "'Poppins', sans-serif",
};

export default function GlobalReservationModal() {
  const { isReservationOpen, setIsReservationOpen } = useCart();
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '' });
  const [guests, setGuests] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isReservationOpen) return null;

  const guestOpts = ['1 Person', '2 People', '3 People', '4 People', '5 People', '6 People', 'Banquet'];
  const timeOpts  = ['10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm','9:00 pm','10:00 pm'];

  const close = () => {
    setIsReservationOpen(false);
    setForm({ name: '', email: '', phone: '', date: '' });
    setGuests(''); setTime('');
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(close, 4000);
  };

  const onFocus = e => { e.target.style.borderColor = '#C19D60'; e.target.style.background = 'rgba(255,255,255,0.1)'; };
  const onBlur  = e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.background = 'rgba(255,255,255,0.06)'; };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, overflow: 'auto' }}>
      {/* Overlay */}
      <div onClick={close} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', zIndex: 1 }} />

      {/* Modal container */}
      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 5, top: '5%', paddingBottom: 60, paddingLeft: 16, paddingRight: 16 }}>
        <div style={{ background: '#292929', padding: '60px 60px 50px', position: 'relative' }}>
          {/* Inner dashed decoration */}
          <div style={{ position: 'absolute', top: 28, left: 28, right: 28, bottom: 28, border: '1px dashed rgba(255,255,255,0.1)', pointerEvents: 'none', zIndex: 2 }} />
          {/* Close */}
          <button onClick={close}
            style={{ position: 'absolute', right: 10, top: 10, width: 40, height: 40, border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', cursor: 'pointer', fontSize: 14, zIndex: 10, color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>✕</button>

          <div style={{ position: 'relative', zIndex: 3 }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 24, color: '#C19D60', marginBottom: 12 }}>✓ Reservation Received!</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14 }}>We will contact you shortly to confirm your table booking.</p>
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                  <h4 style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: '#C19D60', fontSize: 16, marginBottom: 10 }}>
                    Don&apos;t forget to book a table
                  </h4>
                  <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 28, fontWeight: 900, color: '#fff' }}>
                    Table Reservations
                  </h2>
                  <div style={{ margin: '10px 0' }}><span style={{ fontSize: 7, letterSpacing: 4, color: 'rgba(255,255,255,0.25)' }}>●●●●●●</span></div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    {/* Full Name */}
                    <div>
                      <label style={labelStyle}>Your Full Name <span style={{ color: '#C19D60' }}>*</span></label>
                      <input type="text" placeholder="e.g. Ahmed Khan" required value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Email Address <span style={{ color: '#C19D60' }}>*</span></label>
                      <input type="email" placeholder="your@email.com" required value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    {/* Phone – required */}
                    <div>
                      <label style={labelStyle}>Phone <span style={{ color: '#C19D60' }}>*</span></label>
                      <input type="tel" placeholder="+92 3XX XXXXXXX" required value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    {/* Persons – dropdown */}
                    <div>
                      <label style={labelStyle}>Persons <span style={{ color: '#C19D60' }}>*</span></label>
                      <select value={guests} onChange={e => setGuests(e.target.value)} required style={{ ...selectStyle, background: `rgba(255,255,255,0.06) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c4954a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") no-repeat right 14px center` }}
                        onFocus={onFocus} onBlur={onBlur}>
                        <option value="" disabled style={{ background: '#292929' }}>Select guests</option>
                        {guestOpts.map(g => <option key={g} value={g} style={{ background: '#292929' }}>{g}</option>)}
                      </select>
                    </div>
                    {/* Date */}
                    <div>
                      <label style={labelStyle}>Date <span style={{ color: '#C19D60' }}>*</span></label>
                      <input type="date" required value={form.date}
                        onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                        style={{ ...fieldStyle, colorScheme: 'dark' }} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    {/* Time – dropdown */}
                    <div>
                      <label style={labelStyle}>Time <span style={{ color: '#C19D60' }}>*</span></label>
                      <select value={time} onChange={e => setTime(e.target.value)} required style={{ ...selectStyle, background: `rgba(255,255,255,0.06) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c4954a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") no-repeat right 14px center` }}
                        onFocus={onFocus} onBlur={onBlur}>
                        <option value="" disabled style={{ background: '#292929' }}>Select time</option>
                        {timeOpts.map(t => <option key={t} value={t} style={{ background: '#292929' }}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: 28 }}>
                    <button type="submit"
                      style={{ padding: '14px 60px', background: '#C19D60', border: 'none', color: '#fff', fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 18, transition: 'opacity 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                      Reserve Table <ChevronRight size={14} />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
