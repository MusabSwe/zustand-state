import { create } from "zustand";

// TS type
type StoreState = {
  count: number;
  increment: (num:number) => void;
  decrement: (num:number) => void;
}

// store custom hook
const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: (num) => set((state) => ({ count: state.count + num })),
  decrement: (num) => set((state) => ({ count: state.count - num })),
}));

export default useStore;