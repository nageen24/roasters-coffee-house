import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ float: 'left', width: '100%', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#fff', padding: '80px 20px' }}>
      <div>
        <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 140, fontWeight: 900, color: '#eee', lineHeight: 1, marginBottom: 20 }}>404</div>
        <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 36, fontWeight: 700, color: '#323246', marginBottom: 15 }}>
          Page Not Found
        </h2>
        <p style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', fontSize: 16, color: '#999', maxWidth: 500, margin: '0 auto 35px' }}>
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link href="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 35px', background: '#292929', color: '#fff', fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
          onMouseEnter={undefined}
          onMouseLeave={undefined}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
