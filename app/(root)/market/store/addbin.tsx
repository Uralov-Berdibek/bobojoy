import { create } from 'zustand';

interface Task {
  id: number;
  [key: string]: any;
}

interface AddBinState {
  data: Task[];
  addBin: (task: Task) => void;
}


const useAddBin = create<AddBinState>((set) => ({
  data: [],
  addBin: (task) => set((state) => ({
    data: [...state.data, task]
  }))
}));

export default useAddBin;
