import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Privacy = {
  isAnalytics: boolean;
  expiriesOn: Date | null;
};

type UserStoreData = {
  privacy: Privacy | null;
};

type OrderStoreActions = {
  setIsAnalyticsAccepted: (privacy: Privacy) => void;
  setAnalyticsDisabled: () => void;
};

const initialStoreData: UserStoreData = {
  privacy: null,
};

export type State = UserStoreData & OrderStoreActions;

export const useUserStore = create<State>()(
  persist(
    (set, get) => ({
      ...initialStoreData,
      setIsAnalyticsAccepted: (privacy) => set({ privacy }),
      setAnalyticsDisabled: () =>
        set({
          privacy: {
            isAnalytics: false,
            expiriesOn: null,
          },
        }),
    }),
    {
      name: "user-storage",
    },
  ),
);
