import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const initial = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};
export const useStore = create(
  persist(
    (set, get) => ({
      ...initial,
      addToCart: (product) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.img === product.img);

        if (cartItem) {
          const newCart = cart.map((item) =>
            item.img === product.img
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set((state) => ({
            cart: newCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          const newCart = [...cart, { ...product, quantity: 1 }]
          set((state) => ({
            cart: newCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },
      removeItem: (product) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.img !== product.img),
          totalItems: state.totalItems - product.quantity,
          totalPrice: state.totalPrice - product.price,
        }));
      },
      clearCart: () => {
        set(initial), console.log("clicked");
      },
    }),

    {
      name: "Store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

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
