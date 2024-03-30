import { create } from "zustand";

export const useProducts = create((set) => ({
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
      console.log(error);
    }
  },
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (product) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
}));
