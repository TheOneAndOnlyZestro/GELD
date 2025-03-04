import { create } from "zustand";

export interface ShowItemCreatorState {
  show: boolean;
  toggleShow: () => void;
}
export const useShowItemCreatorStore = create<ShowItemCreatorState>((set) => ({
  show: false,
  toggleShow: () => set((state) => ({ show: !state.show })),
}));
