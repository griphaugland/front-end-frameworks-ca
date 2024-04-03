import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProducts = create(
  persist(
    (set) => ({
      error: false,
      setError: (value, message) => set({ error: value, message: message }),
      loading: true,
      setLoading: (value) => set({ loading: value }),
      products: [],
      getProducts: async (url) => {
        try {
          set({ loading: true });
          const res = await fetch(url);
          const data = await res.json();
          set({ loading: false });
          set({ products: data });
        } catch (e) {
          set({ error: true, message: e.message });
          console.log(e.message);
        }
      },
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== product.id),
        })),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
