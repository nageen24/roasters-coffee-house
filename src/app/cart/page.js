'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag, ChevronRight, Tag } from 'lucide-react';

export default function CartPage() {
  const { cartItems, totalItems, totalPrice, updateQty, removeFromCart, clearCart } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => {
    const num = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return sum + num * item.qty;
  }, 0);
  const discountAmt = Math.round(subtotal * discount);
  const gst = Math.round((subtotal - discountAmt) * 0.05);
  const total = subtotal - discountAmt + gst;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'ROASTERS10') {
      setDiscount(0.1); setCouponMsg('✓ 10% discount applied!');
    } else {
      setDiscount(0); setCouponMsg('✗ Invalid coupon code.');
    }
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => setOrderPlaced(false), 6000);
  };

  return (
    <>
      {/* Header */}
      <div style={{ position: 'relative', minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', float: 'left', width: '100%' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#292929' }} />
        <div style={{ position: 'relative', zIndex: 5 }}>
          <div style={{ fontSize: 9, letterSpacing: 4, color: 'rgba(255,255,255,0.4)', marginBottom: 18 }}>● ● ● ● ●</div>
          <h1 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 42, fontWeight: 900, color: '#fff', marginBottom: 15 }}>Shopping Cart</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#C19D60' }}>›</span>
            <span style={{ color: '#fff' }}>Cart</span>
          </div>
        </div>
      </div>

      <section style={{ float: 'left', width: '100%', background: '#f9f9f9', padding: '80px 0' }}>
        <div className="container">
          {orderPlaced ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: '#fff', border: '1px solid #eee' }}>
              <div style={{ fontSize: 50, marginBottom: 20 }}>🎉</div>
              <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 32, color: '#C19D60', marginBottom: 16 }}>Order Placed!</h2>
              <p style={{ color: '#5e646a', fontSize: 14, maxWidth: 500, margin: '0 auto 30px' }}>
                Thank you for your order! We&apos;ll confirm it shortly and contact you for delivery/pickup details.
              </p>
              <Link href="/menu" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 30px', background: '#292929', color: '#fff', fontFamily: "'Playfair Display', cursive", fontSize: 14, textDecoration: 'none' }}>
                Browse Menu <ChevronRight size={14} />
              </Link>
            </div>
          ) : cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: '#fff', border: '1px solid #eee' }}>
              <ShoppingBag size={64} strokeWidth={1} style={{ color: '#ddd', margin: '0 auto 20px', display: 'block' }} />
              <h2 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 28, color: '#323246', marginBottom: 15 }}>Your cart is empty</h2>
              <p style={{ color: '#5e646a', fontSize: 13, marginBottom: 30 }}>Looks like you haven&apos;t added anything yet.</p>
              <Link href="/menu" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 30px', background: '#292929', color: '#fff', fontFamily: "'Playfair Display', cursive", fontSize: 14, textDecoration: 'none' }}>
                Explore Menu <ChevronRight size={14} />
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 30, alignItems: 'start' }}>
              {/* Cart table */}
              <div style={{ background: '#fff', border: '1px solid #eee' }}>
                {/* Table header */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 40px', padding: '18px 24px', background: '#f9f9f9', borderBottom: '1px solid #eee', fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#888' }}>
                  <span>Product</span><span style={{ textAlign: 'center' }}>Price</span><span style={{ textAlign: 'center' }}>Qty</span><span style={{ textAlign: 'right' }}>Subtotal</span><span />
                </div>

                {cartItems.map(item => {
                  const price = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
                  return (
                    <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 40px', padding: '20px 24px', borderBottom: '1px solid #f5f5f5', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <img src={item.image} alt={item.name} style={{ width: 60, height: 60, objectFit: 'cover', flexShrink: 0 }} />
                        <div>
                          <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 600, color: '#292929' }}>{item.name}</div>
                          <div style={{ fontSize: 11, color: '#aaa', fontFamily: "'Poppins', sans-serif" }}>{item.category}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'center', fontFamily: "'Playfair Display', cursive", fontSize: 14, color: '#5e646a' }}>{item.price}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ width: 26, height: 26, border: '1px solid #eee', background: '#f9f9f9', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}><Minus size={12} /></button>
                        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, minWidth: 24, textAlign: 'center' }}>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ width: 26, height: 26, border: '1px solid #eee', background: '#f9f9f9', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}><Plus size={12} /></button>
                      </div>
                      <div style={{ textAlign: 'right', fontFamily: "'Playfair Display', cursive", fontSize: 15, fontWeight: 600, color: '#C19D60' }}>
                        Rs. {(price * item.qty).toLocaleString()}
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#e55'}
                        onMouseLeave={e => e.currentTarget.style.color = '#ccc'}><Trash2 size={14} /></button>
                    </div>
                  );
                })}

                {/* Coupon */}
                <div style={{ padding: '20px 24px', borderTop: '1px solid #eee', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flex: 1, gap: 8, minWidth: 200 }}>
                    <input placeholder="Coupon code (try: ROASTERS10)" value={coupon} onChange={e => setCoupon(e.target.value)}
                      style={{ flex: 1, height: 44, border: '1px solid #eee', background: '#f9f9f9', padding: '0 16px', fontFamily: "'Poppins', sans-serif", fontSize: 12, outline: 'none' }} />
                    <button onClick={applyCoupon} style={{ height: 44, padding: '0 20px', background: '#292929', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 12, fontWeight: 600, transition: 'background 0.2s', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 6 }}
                      onMouseEnter={e => e.currentTarget.style.background = '#C19D60'}
                      onMouseLeave={e => e.currentTarget.style.background = '#292929'}>
                      <Tag size={12} /> Apply Coupon
                    </button>
                  </div>
                  {couponMsg && (
                    <span style={{ fontSize: 12, color: couponMsg.startsWith('✓') ? '#5a8a5a' : '#e55', fontFamily: "'Poppins', sans-serif" }}>{couponMsg}</span>
                  )}
                </div>
              </div>

              {/* Order Summary */}
              <div style={{ background: '#fff', border: '1px solid #eee', padding: '30px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', cursive", fontSize: 20, fontWeight: 700, color: '#323246', paddingBottom: 20, borderBottom: '1px solid #eee', marginBottom: 20 }}>
                  Order Summary
                </h3>
                {[
                  { label: 'Subtotal', value: `Rs. ${subtotal.toLocaleString()}` },
                  ...(discount ? [{ label: `Discount (${discount * 100}%)`, value: `-Rs. ${discountAmt.toLocaleString()}`, highlight: true }] : []),
                  { label: 'GST (5%)', value: `Rs. ${gst.toLocaleString()}` },
                ].map(({ label, value, highlight }, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px dotted #f0f0f0' }}>
                    <span style={{ fontSize: 13, color: '#666', fontFamily: "'Poppins', sans-serif" }}>{label}</span>
                    <span style={{ fontFamily: "'Playfair Display', cursive", fontSize: 14, fontWeight: 600, color: highlight ? '#5a8a5a' : '#292929' }}>{value}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0 0', marginTop: 10 }}>
                  <span style={{ fontFamily: "'Playfair Display', cursive", fontSize: 17, fontWeight: 700, color: '#292929' }}>Total</span>
                  <span style={{ fontFamily: "'Playfair Display', cursive", fontSize: 20, fontWeight: 700, color: '#C19D60' }}>Rs. {total.toLocaleString()}</span>
                </div>
                <button onClick={handleCheckout}
                  style={{ width: '100%', marginTop: 24, height: 52, background: '#C19D60', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: "'Playfair Display', cursive", fontSize: 15, fontWeight: 600, letterSpacing: 1, transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  Proceed to Checkout <ChevronRight size={16} />
                </button>
                <Link href="/menu" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 14, color: '#888', fontFamily: "'Poppins', sans-serif", fontSize: 12, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C19D60'}
                  onMouseLeave={e => e.currentTarget.style.color = '#888'}>
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
