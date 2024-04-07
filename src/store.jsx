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
          if (!res.ok) {
            console.log(res);
            set({
              error: { statusCode: res.statusText, status: res.status },
            });
          }
          set({ loading: false });
          set({ products: data });
        } catch (e) {
          console.log(e);
          set({ error: { statusCode: e.statusCode, status: e.status } });
        }
      },
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== product.id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
