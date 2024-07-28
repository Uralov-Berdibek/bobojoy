import create from "zustand";
import axios from "axios";

interface Product {
  title: string;
  price: number;
  category:string;
  rating: {
    rate: number;
  };
}

type FetchStore = {
  data: Product[];
  filtered: Product[];
  categories: Product[];
  loading: boolean;
  hasErrors: boolean;
  fetch: () => Promise<void>;
  filter: () => void;
  filterByCategory: (category: string) => void; 
}

const useFetch = create<FetchStore>((set) => ({
  data: [],
  filtered: [],
  categories: [],
  loading: false,
  hasErrors: false,
  fetch: async () => {
    set({ loading: true });
    try {
      const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
      set({ data: response.data });
      set((state) => ({ filtered: state.data.filter(item => item.rating.rate >= 4.7) }));
      set((state) => ({
        categories: state.data
      }));
    } catch (err) {
      set({ hasErrors: true });
    } finally {
      set({ loading: false });
    }
  },
  filter: () => set((state) => ({
    filtered: state.data.filter(item => item.rating.rate >= 4.7)
  })),
  filterByCategory: (category) => set((state) => ({
    categories: state.data.filter(item => item.category === category)
  }))
}));

export default useFetch;
