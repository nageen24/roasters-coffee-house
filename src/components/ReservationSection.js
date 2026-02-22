'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

const timeSlots = [
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM',
];

export default function ReservationSection({ bgImage = '' }) {
  const { setIsReservationOpen } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: '2', occasion: '' });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: bgImage ? `url(${bgImage})` : 'url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '5rem 0',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.82)' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Book a Table</p>
          <h2 className="section-title">Table Reservations</h2>
          <div className="gold-divider mx-auto mt-4" />
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <CheckCircle size={56} style={{ color: 'var(--gold)' }} />
            <h4 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.4rem', color: 'var(--white)' }}>
              Reservation Received!
            </h4>
            <p style={{ fontFamily: 'Raleway,sans-serif', color: 'var(--gray)', fontSize: '0.875rem' }}>
              We'll confirm your booking shortly. Thank you!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-3 items-end justify-center flex-wrap"
          >
            <div className="flex flex-col gap-1 w-full md:w-auto" style={{ minWidth: '180px' }}>
              <label style={{ fontFamily: 'Raleway,sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Your Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full name"
                className="input-dark"
              />
            </div>

            <div className="flex flex-col gap-1 w-full md:w-auto" style={{ minWidth: '160px' }}>
              <label style={{ fontFamily: 'Raleway,sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Date
              </label>
              <div style={{ position: 'relative' }}>
                <Calendar size={14} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold)', pointerEvents: 'none' }} />
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="input-dark"
                  style={{ paddingLeft: '2.25rem', colorScheme: 'dark' }}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full md:w-auto" style={{ minWidth: '160px' }}>
              <label style={{ fontFamily: 'Raleway,sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Time
              </label>
              <div style={{ position: 'relative' }}>
                <Clock size={14} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold)', pointerEvents: 'none' }} />
                <select name="time" value={form.time} onChange={handleChange} required className="select-dark" style={{ paddingLeft: '2.25rem' }}>
                  <option value="">Select time</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full md:w-auto" style={{ minWidth: '140px' }}>
              <label style={{ fontFamily: 'Raleway,sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Guests
              </label>
              <div style={{ position: 'relative' }}>
                <Users size={14} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold)', pointerEvents: 'none' }} />
                <select name="guests" value={form.guests} onChange={handleChange} className="select-dark" style={{ paddingLeft: '2.25rem' }}>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="banquet">Banquet</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full md:w-auto" style={{ minWidth: '160px' }}>
              <label style={{ fontFamily: 'Raleway,sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Occasion
              </label>
              <select name="occasion" value={form.occasion} onChange={handleChange} className="select-dark">
                <option value="">Any occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Business</option>
                <option>Date Night</option>
                <option>Other</option>
              </select>
            </div>

            <button type="submit" className="btn-gold" style={{ height: '52px', whiteSpace: 'nowrap', marginTop: 'auto' }}>
              Reserve Table
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
