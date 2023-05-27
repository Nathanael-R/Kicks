import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

 const store = (set) => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  addToCart: (product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });

      set((store) => ({
        cart: newCart,
        totalItems: store.totalItems + 1,
        totalPrice: store.totalPrice + product.price,
      }));
    } else {
      const newCart = [...cart, { product, quantity: 1 }];
      set((state) => ({
        cart: newCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },
  clearCart: () => set({ cart: [] }),
  removeItem: (product) =>
    set((store) => ({
      cart: store.cart.filter((item) => item.id !== product.id),
      totalItems: store.totalItems,
      totalPrice: store.totalPrice - product.price,
    })),
});

export const useStore = create(persist(devtools(store), { name: "Store" }));

/*
   const getItemAmount = (id) => {
      const quantity = cart.find((product) => product.id === id)?.quantity
      if (quantity === undefined) {
        return 0
      } else {
        return quantity
      }
      console.log("clicked")
    }
   */
