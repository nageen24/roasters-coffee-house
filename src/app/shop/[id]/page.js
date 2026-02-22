'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { shopProducts } from '@/lib/data';
import { ShoppingBag, Star, ChevronRight, Minus, Plus, ArrowLeft } from 'lucide-react';

const products = shopProducts || [];

export default function ProductPage({ params }) {
  const product = products.find(p => p.id === parseInt(params.id)) || products[0];
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('description');
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter(p => p.id !== product?.id && p.category === product?.category).slice(0, 3);

  if (!product) return null;

  return (
    <>
      {/* Header */}
      <div style={{ position: 'relative', minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', float: 'left', width: '100%' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#292929' }} />
        <div style={{ position: 'relative', zIndex: 5 }}>
          <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 36, fontWeight: 900, color: '#fff', marginBottom: 15 }}>Product Detail</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#C19D60' }}>›</span>
            <Link href="/shop" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Shop</Link>
            <span style={{ color: '#C19D60' }}>›</span>
            <span style={{ color: '#fff' }}>{product.name}</span>
          </div>
        </div>
      </div>

      <section style={{ float: 'left', width: '100%', background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <Link href="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#888', fontFamily: "'Poppins', sans-serif", fontSize: 12, textDecoration: 'none', marginBottom: 40, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
            onMouseLeave={e => e.currentTarget.style.color = '#888'}>
            <ArrowLeft size={14} /> Back to Shop
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 60 }}>
            {/* Image */}
            <div>
              <div style={{ overflow: 'hidden', border: '1px solid #eee' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: 450, objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
            </div>

            {/* Info */}
            <div>
              <div style={{ fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: 1, fontFamily: "'Poppins', sans-serif", marginBottom: 8 }}>
                {product.category}
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 30, fontWeight: 900, color: '#323246', marginBottom: 15, lineHeight: 1.3 }}>
                {product.name}
              </h1>

              {/* Stars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 15 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < product.rating ? '#C19D60' : 'none'} color={i < product.rating ? '#C19D60' : '#ddd'} />
                ))}
                <span style={{ fontSize: 12, color: '#aaa', fontFamily: "'Poppins', sans-serif" }}>({product.reviews || 0} reviews)</span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: "'Playfair Display', cursive", fontSize: 28, fontWeight: 700, color: '#C19D60' }}>{product.price}</span>
                {product.oldPrice && (
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: '#bbb', textDecoration: 'line-through' }}>{product.oldPrice}</span>
                )}
              </div>

              <p style={{ color: '#5e646a', fontSize: 13, lineHeight: 2, marginBottom: 25, paddingBottom: 0 }}>{product.description}</p>

              <div style={{ width: '100%', height: 1, background: '#eee', margin: '20px 0' }} />

              {/* Qty + Add */}
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #eee' }}>
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 42, height: 52, background: '#f9f9f9', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', transition: 'background 0.2s' }}><Minus size={14} /></button>
                  <span style={{ width: 50, textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600 }}>{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} style={{ width: 42, height: 52, background: '#f9f9f9', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', transition: 'background 0.2s' }}><Plus size={14} /></button>
                </div>
                <button onClick={handleAddToCart}
                  style={{ flex: 1, height: 52, background: added ? '#5a8a5a' : '#C19D60', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'all 0.2s' }}>
                  <ShoppingBag size={16} /> {added ? 'Added!' : 'Add to Cart'}
                </button>
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
                {['In Stock', 'Free Delivery on orders over Rs.3000', 'Authentic'].map((badge, i) => (
                  <span key={i} style={{ padding: '5px 10px', background: '#f5f5f5', border: '1px solid #eee', fontSize: 10, color: '#666', fontFamily: "'Poppins', sans-serif" }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div>
            <div style={{ display: 'flex', borderBottom: '1px solid #eee' }}>
              {['description', 'reviews'].map(t => (
                <button key={t} onClick={() => setTab(t)}
                  style={{ padding: '12px 30px', background: 'transparent', border: 'none', borderBottom: `2px solid ${tab === t ? '#C19D60' : 'transparent'}`, cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, textTransform: 'capitalize', color: tab === t ? '#C19D60' : '#888', marginBottom: -1, transition: 'all 0.2s' }}>
                  {t}
                </button>
              ))}
            </div>
            <div style={{ padding: '30px 0' }}>
              {tab === 'description' ? (
                <p style={{ color: '#5e646a', fontSize: 13, lineHeight: 2, maxWidth: 700, paddingBottom: 0 }}>
                  {product.description} This product is carefully sourced and quality-checked to ensure you receive the best possible experience from Roasters Coffee House & Grill.
                </p>
              ) : (
                <div style={{ maxWidth: 600 }}>
                  <div style={{ fontFamily: "'Playfair Display', cursive", fontStyle: 'italic', color: '#323246', fontSize: 18, marginBottom: 20 }}>
                    {product.reviews || 0} Customer Reviews
                  </div>
                  {[...Array(Math.min(3, product.reviews || 2))].map((_, i) => (
                    <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px dotted #eee' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 36, height: 36, background: '#f0f0f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#888' }}>{String.fromCharCode(65 + i)}</div>
                        <div>
                          <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 600, color: '#323246' }}>Happy Customer</div>
                          <div style={{ display: 'flex', gap: 2 }}>{[...Array(5)].map((_, j) => <Star key={j} size={10} fill="#C19D60" color="#C19D60" />)}</div>
                        </div>
                      </div>
                      <p style={{ color: '#666', fontSize: 12, fontStyle: 'italic', paddingBottom: 0 }}>&ldquo;Excellent quality product! Highly recommend.&rdquo;</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div style={{ marginTop: 60, paddingTop: 50, borderTop: '1px solid #eee' }}>
              <h3 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 24, fontWeight: 700, color: '#323246', marginBottom: 30 }}>Related Products</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                {related.map(p => (
                  <Link key={p.id} href={`/shop/${p.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ overflow: 'hidden', border: '1px solid #eee' }}>
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: 200, objectFit: 'cover', transition: 'transform 0.4s' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                    <div style={{ padding: '14px 5px' }}>
                      <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 15, fontWeight: 600, color: '#323246', marginBottom: 5, transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = '#C19D60'}
                        onMouseLeave={e => e.target.style.color = '#323246'}>
                        {p.name}
                      </div>
                      <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 16, color: '#C19D60', fontWeight: 600 }}>{p.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
