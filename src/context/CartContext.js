'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const addToCart = useCallback((item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  }, [removeFromCart]);

  const clearCart = useCallback(() => setCartItems([]), []);

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cartItems.reduce((sum, i) => {
    const price = parseInt(i.price.replace(/[^0-9]/g, ''));
    return sum + price * i.qty;
  }, 0);

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQty, clearCart,
      totalItems, totalPrice,
      isCartOpen, setIsCartOpen,
      isReservationOpen, setIsReservationOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
}

const defaultCart = {
  cartItems: [], addToCart: () => {}, removeFromCart: () => {}, updateQty: () => {}, clearCart: () => {},
  totalItems: 0, totalPrice: 0,
  isCartOpen: false, setIsCartOpen: () => {},
  isReservationOpen: false, setIsReservationOpen: () => {},
};

export function useCart() {
  const ctx = useContext(CartContext);
  return ctx || defaultCart;
}
