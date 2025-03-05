import { create } from "zustand";
import { item } from "@/db/db";

export interface itemCreateStoreState {
  currentItem: item;
  setItemName: (name: string) => void;
  setItemCategory: (category: string) => void;
  setItemPrice: (price: number) => void;
  setItemStore: (store: string) => void;
  setItemDate: (date: string) => void;
}

export const useItemCreatorStore = create<itemCreateStoreState>((set) => ({
  currentItem: {
    name: "",
    category: "",
    price: 0,
    store: "",
    date: "2004-08-09",
  },

  setItemName: (newName: string) =>
    set((state) => ({ currentItem: { ...state.currentItem, name: newName } })),

  setItemCategory: (newCategory: string) =>
    set((state) => ({
      currentItem: { ...state.currentItem, category: newCategory },
    })),

  setItemPrice: (newPrice: number) =>
    set((state) => ({
      currentItem: { ...state.currentItem, price: newPrice },
    })),

  setItemStore: (newStore: string) =>
    set((state) => ({
      currentItem: { ...state.currentItem, store: newStore },
    })),

  setItemDate: (newDate: string) =>
    set((state) => ({
      currentItem: { ...state.currentItem, date: newDate },
    })),
}));
