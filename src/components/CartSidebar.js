'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const GOLD = '#C19D60';

export default function CartSidebar() {
  const { cartItems, isCartOpen, setIsCartOpen, totalItems, totalPrice, updateQty, removeFromCart } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div onClick={() => setIsCartOpen(false)}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 1000, opacity: isCartOpen ? 1 : 0, pointerEvents: isCartOpen ? 'all' : 'none', transition: 'opacity 0.4s' }} />

      {/* Sidebar */}
      <div style={{ position: 'fixed', top: 0, right: 0, width: 420, height: '100vh', background: '#212121', zIndex: 1001, borderLeft: '1px solid rgba(255,255,255,0.07)', transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.4s ease-in-out', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>

        {/* Header */}
        <div style={{ padding: '20px 25px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 19, fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: 10 }}>
            Your Cart
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>
              {totalItems} items
            </span>
          </div>
          <button onClick={() => setIsCartOpen(false)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <ShoppingBag size={50} strokeWidth={1} style={{ margin: '0 auto 20px', display: 'block', color: 'rgba(255,255,255,0.15)' }} />
              <p style={{ fontFamily: "'Playfair Display', cursive", fontSize: 18, color: 'rgba(255,255,255,0.3)', paddingBottom: 0 }}>Your cart is empty</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>Add some items from our menu</p>
            </div>
          ) : (
            <div style={{ padding: '0 25px' }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: 15, padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', alignItems: 'flex-start' }}>
                  {/* Image */}
                  <div style={{ width: 70, height: 70, flexShrink: 0, overflow: 'hidden', background: '#333' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Playfair Display', cursive", fontSize: 14, color: '#fff', fontWeight: 600, marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: GOLD, fontFamily: "'Playfair Display', cursive", fontWeight: 600 }}>{item.price}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                      <button onClick={() => updateQty(item.id, item.qty - 1)}
                        style={{ width: 24, height: 24, background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', transition: 'background 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = GOLD}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: 13, fontWeight: 600, minWidth: 20, textAlign: 'center', color: '#fff' }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}
                        style={{ width: 24, height: 24, background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', transition: 'background 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = GOLD}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  {/* Remove */}
                  <button onClick={() => removeFromCart(item.id)}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.25)', padding: 2, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#e55'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 25px', flexShrink: 0 }}>
            <div style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Playfair Display', cursive", fontSize: 16, fontWeight: 600, color: '#fff' }}>Subtotal :</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: GOLD }}>
                Rs. {Number(totalPrice).toLocaleString()}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <Link href="/cart" onClick={() => setIsCartOpen(false)}
                style={{ flex: 1, padding: '13px 0', background: '#fff', color: '#292929', textAlign: 'center', fontFamily: "'Playfair Display', cursive", fontSize: 12, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#292929'; }}>
                View Cart
              </Link>
              <Link href="/cart" onClick={() => setIsCartOpen(false)}
                style={{ flex: 1, padding: '13px 0', background: '#fff', color: '#292929', textAlign: 'center', fontFamily: "'Playfair Display', cursive", fontSize: 12, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#292929'; }}>
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
