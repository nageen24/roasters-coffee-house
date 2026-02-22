'use client';
import { useState } from 'react';
import Link from 'next/link';
import { restaurantInfo } from '@/lib/data';
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Hi Tea', href: '/hi-tea' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: restaurantInfo.social.facebook, label: 'Facebook' },
    { icon: Twitter, href: restaurantInfo.social.twitter, label: 'Twitter' },
    { icon: Instagram, href: restaurantInfo.social.instagram, label: 'Instagram' },
    { icon: Youtube, href: restaurantInfo.social.youtube, label: 'Youtube' },
  ];

  return (
    <footer style={{ float: 'left', width: '100%', background: '#292929' }}>
      {/* Widget area */}
      <div className="container" style={{ padding: '50px 0 0' }}>
        {/* Top row: Logo + Language + Social */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 30, paddingBottom: 30, borderBottom: '1px dotted rgba(255,255,255,0.12)' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 20, fontWeight: 900, color: '#fff', letterSpacing: 3, textTransform: 'uppercase' }}>
                ROASTERS
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, color: '#C19D60', letterSpacing: 4, textTransform: 'uppercase', marginTop: 2 }}>
                COFFEE HOUSE & GRILL
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <span style={{ fontFamily: "'Playfair Display', cursive", color: '#fff', marginRight: 20, fontSize: 14 }}>Follow us :</span>
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', borderLeft: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', background: 'rgba(255,255,255,0.04)', color: '#fff', fontSize: 13, transition: 'all 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#333'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#fff'; }}>
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Three columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, paddingBottom: 60 }}>
          {/* Column 1: About */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 18, color: '#fff', paddingBottom: 22, textAlign: 'left' }}>
              About us
            </h4>
            <p style={{ textAlign: 'left', color: 'rgba(255,255,255,0.6)', fontSize: 12, lineHeight: 1.9 }}>
              {restaurantInfo.shortDescription}
            </p>
            <a href="/contact" style={{ display: 'inline-block', fontFamily: "'Playfair Display', cursive", fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 6, paddingBottom: 4, borderBottom: '1px dotted rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
              Get in Touch
            </a>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 18, color: '#fff', paddingBottom: 22, textAlign: 'left' }}>
              Contact info
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: 10, marginBottom: 10, color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                <span style={{ color: 'rgba(255,255,255,0.35)', minWidth: 50 }}>Call :</span>
                <span>
                  <a href={`tel:${restaurantInfo.locations[0].phone}`}
                    style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                    {restaurantInfo.locations[0].phone}
                  </a>
                  {' , '}
                  <a href={`tel:${restaurantInfo.locations[1].phone}`}
                    style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                    {restaurantInfo.locations[1].phone}
                  </a>
                </span>
              </li>
              <li style={{ display: 'flex', gap: 10, marginBottom: 10, color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                <span style={{ color: 'rgba(255,255,255,0.35)', minWidth: 50 }}>Write :</span>
                <a href={`mailto:${restaurantInfo.email}`}
                  style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  {restaurantInfo.email}
                </a>
              </li>
              <li style={{ display: 'flex', gap: 10, marginBottom: 10, color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                <span style={{ color: 'rgba(255,255,255,0.35)', minWidth: 50 }}>Find us :</span>
                <a href={restaurantInfo.locations[0].mapLink} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  {restaurantInfo.locations[0].address}
                </a>
              </li>
            </ul>
            <a href="/contact" style={{ display: 'inline-block', fontFamily: "'Playfair Display', cursive", fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 6, paddingBottom: 4, borderBottom: '1px dotted rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
              Get in Touch
            </a>
          </div>

          {/* Column 3: Subscribe */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 18, color: '#fff', paddingBottom: 22, textAlign: 'left' }}>
              Subscribe
            </h4>
            <p style={{ textAlign: 'left', color: 'rgba(255,255,255,0.6)', fontSize: 12, lineHeight: 1.9 }}>
              Want to be notified when we launch new menu items or special offers? Just sign up and we&apos;ll send you a notification by email.
            </p>
            {subscribed ? (
              <p style={{ color: '#C19D60', fontSize: 12, textAlign: 'left' }}>✓ You&apos;ve subscribed successfully!</p>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', marginTop: 10 }}>
                <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)}
                  style={{ flex: 1, height: 50, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', padding: '0 16px', color: '#fff', fontFamily: "'Poppins', sans-serif", fontSize: 12, outline: 'none' }} />
                <button type="submit"
                  style={{ height: 50, padding: '0 18px', background: '#C19D60', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 13, fontWeight: 600, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div style={{ height: 80, background: '#222', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: "'Playfair Display', cursive", color: '#fff', fontSize: 13 }}>
            © Roasters Coffee House & Grill {new Date().getFullYear()}. All rights reserved.
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 13, display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
            onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
            Back To Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
