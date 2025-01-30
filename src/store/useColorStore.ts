import { create } from "zustand";

interface ColorStore {
    fill: string;
    setFill: (color: string) => void;
  }
  
  export const useColorStore = create<ColorStore>((set) => ({
    fill: '#B3B7D3',
    setFill: (color) => set({ fill: color }),
  }));