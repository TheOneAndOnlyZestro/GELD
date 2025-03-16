import { create } from "zustand";
import { item } from "@/db/db";

export type mode = "CREATE" | "UPDATE";
export interface itemCreateStoreState {
  currentMode: mode;
  updateItemID: number;
  currentItem: item;
  shouldChange: boolean;

  toggleShouldChange: () => void;

  setUpdateItemID: (updateID: number) => void;
  setModeCreate: () => void;
  setModeUpdate: () => void;

  setCurrentItem: (newItem: item) => void;
  setItemName: (name: string) => void;
  setItemCategory: (category: string) => void;
  setItemPrice: (price: number) => void;
  setItemStore: (store: string) => void;
  setItemDate: (date: string) => void;
}

export const useItemCreatorStore = create<itemCreateStoreState>((set) => ({
  shouldChange: false,
  currentMode: "CREATE",
  updateItemID: 0,
  currentItem: {
    name: "",
    category: "",
    price: 0,
    store: "",
    date: "2004-08-09",
  },

  toggleShouldChange: () =>
    set((state) => ({ ...state, shouldChange: !state.shouldChange })),
  setModeCreate: () => set((state) => ({ ...state, currentMode: "CREATE" })),
  setModeUpdate: () => set((state) => ({ ...state, currentMode: "UPDATE" })),

  setCurrentItem: (newItem: item) =>
    set((state) => ({ ...state, currentItem: newItem })),
  setUpdateItemID: (updateID: number) =>
    set((state) => ({ ...state, updateItemID: updateID })),

  setItemName: (newName: string) =>
    set((state) => ({
      ...state,
      currentItem: { ...state.currentItem, name: newName },
    })),

  setItemCategory: (newCategory: string) =>
    set((state) => ({
      ...state,
      currentItem: { ...state.currentItem, category: newCategory },
    })),

  setItemPrice: (newPrice: number) =>
    set((state) => ({
      ...state,
      currentItem: { ...state.currentItem, price: newPrice },
    })),

  setItemStore: (newStore: string) =>
    set((state) => ({
      ...state,
      currentItem: { ...state.currentItem, store: newStore },
    })),

  setItemDate: (newDate: string) =>
    set((state) => ({
      ...state,
      currentItem: { ...state.currentItem, date: newDate },
    })),
}));
