'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { shopProducts } from '@/lib/data';
import { ShoppingBag, Star } from 'lucide-react';

const products = shopProducts || [
  { id: 1, name: 'Roasters Signature Blend (250g)', category: 'Coffee Beans', price: 'Rs. 1,200', oldPrice: 'Rs. 1,500', rating: 5, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80', description: 'Our signature house blend, dark roasted to perfection.' },
  { id: 2, name: 'Ethiopian Single Origin (200g)', category: 'Coffee Beans', price: 'Rs. 1,500', rating: 5, image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80', description: 'Bright and fruity single origin from the highlands of Ethiopia.' },
  { id: 3, name: 'Roasters Travel Mug', category: 'Merchandise', price: 'Rs. 850', rating: 4, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80', description: 'Stainless steel travel mug with Roasters branding. Keep your coffee hot for hours.' },
  { id: 4, name: 'French Press (600ml)', category: 'Brewing Equipment', price: 'Rs. 2,200', rating: 4, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80', description: 'Premium borosilicate glass French press for a rich, full-bodied brew.' },
  { id: 5, name: 'Colombia Huila (200g)', category: 'Coffee Beans', price: 'Rs. 1,350', rating: 5, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80', description: 'Caramel and chocolate notes with a smooth, balanced finish.' },
  { id: 6, name: 'Roasters Branded Cap', category: 'Merchandise', price: 'Rs. 650', rating: 4, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80', description: 'Premium cotton cap with embroidered Roasters logo.' },
  { id: 7, name: 'Pour Over Kit', category: 'Brewing Equipment', price: 'Rs. 3,500', rating: 5, image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=500&q=80', description: 'Complete pour-over set including dripper, carafe, and filters.' },
  { id: 8, name: 'Gift Box Set', category: 'Gift Sets', price: 'Rs. 2,800', oldPrice: 'Rs. 3,200', rating: 5, image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=500&q=80', description: 'Perfect gift set including two premium blends and a branded mug.' },
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState('default');

  const sorted = [...products].sort((a, b) => {
    if (sortBy === 'price-asc') return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
    if (sortBy === 'price-desc') return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''));
    return 0;
  });

  return (
    <>
      {/* Page Header */}
      <div style={{ position: 'relative', minHeight: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', float: 'left', width: '100%' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0.72 }} />
        <div style={{ position: 'relative', zIndex: 5 }}>
          <div style={{ fontSize: 9, letterSpacing: 4, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>● ● ● ● ●</div>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 42, fontWeight: 900, color: '#fff', marginBottom: 15 }}>Our Store</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#C19D60' }}>›</span>
            <span style={{ color: '#fff' }}>Shop</span>
          </div>
        </div>
      </div>

      <section style={{ float: 'left', width: '100%', background: '#fff', padding: '80px 0' }}>
        <div className="container">
          {/* Shop header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0 20px', marginBottom: 30, borderBottom: '1px solid #eee' }}>
            <h4 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 20, fontWeight: 500, color: '#292929' }}>
              Showing {sorted.length} products
            </h4>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}
              style={{ padding: '8px 15px', border: '1px solid #eee', background: '#f9f9f9', fontFamily: "'Poppins', sans-serif", fontSize: 12, outline: 'none', cursor: 'pointer' }}>
              <option value="default">Default Sorting</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {/* Products grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {sorted.map((product) => (
              <div key={product.id} style={{ position: 'relative' }}>
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <Link href={`/shop/${product.id}`}>
                    <img src={product.image} alt={product.name}
                      style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                  </Link>
                  {product.oldPrice && (
                    <div style={{ position: 'absolute', top: 12, left: 12, background: '#e55', color: '#fff', padding: '3px 10px', fontSize: 10, fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
                      SALE
                    </div>
                  )}
                  {/* Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', transition: 'background 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.4)'; e.currentTarget.querySelectorAll('button').forEach(b => b.style.opacity = '1'); }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0)'; e.currentTarget.querySelectorAll('button').forEach(b => b.style.opacity = '0'); }}>
                    <button onClick={() => addToCart(product)}
                      style={{ opacity: 0, padding: '8px 14px', background: '#292929', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 11, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <ShoppingBag size={11} /> Add to Cart
                    </button>
                  </div>
                </div>
                <div style={{ padding: '18px 5px 15px', border: '1px solid #eee', borderTop: 'none', background: '#fff' }}>
                  <div style={{ fontSize: 10, color: '#aaa', textTransform: 'uppercase', letterSpacing: 1, fontFamily: "'Poppins', sans-serif", marginBottom: 4 }}>
                    {product.category}
                  </div>
                  <Link href={`/shop/${product.id}`} style={{ textDecoration: 'none' }}>
                    <h5 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 15, color: '#323246', fontWeight: 700, marginBottom: 8, lineHeight: 1.3, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
                      onMouseLeave={e => e.currentTarget.style.color = '#323246'}>
                      {product.name}
                    </h5>
                  </Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 8 }}>
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={11} fill={j < product.rating ? '#C19D60' : 'none'} color={j < product.rating ? '#C19D60' : '#ddd'} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: "'Playfair Display', cursive", fontSize: 17, color: '#C19D60', fontWeight: 600 }}>{product.price}</span>
                    {product.oldPrice && (
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#bbb', textDecoration: 'line-through' }}>{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
