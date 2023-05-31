import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const initial = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};
const useStore = create((set, get) => ({
  ...initial,
  addToCart: (product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });

      set((state) => ({
        cart: newCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      set((state) => ({
        cart: newCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },
  removeItem: (product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
      totalItems: state.totalItems - product.quantity,
      totalPrice: state.totalPrice - product.price,
    }));
  },
  clearCart: () => {
    set(initial);
  },
}));
