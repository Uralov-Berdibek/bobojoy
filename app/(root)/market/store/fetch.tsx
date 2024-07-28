import create from "zustand";
import axios from "axios";

type FetchStore = {
  data:[];
  loading:boolean;
  hasErrors:boolean;
  fetch:any;
}


const useFetch = create<FetchStore>((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  fetch: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      set({ data: response.data, loading: false });
    } catch (err) {
      set({ hasErrors: true, loading: false });
    }
  },
}));

export default useFetch;