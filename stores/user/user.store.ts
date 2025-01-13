'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ServicePrivacy = {
  isEnabled: boolean;
  expiriesOn: Date | null;
};

type UserStoreData = {
  googleAnalytics: ServicePrivacy;
  clarity: ServicePrivacy;
};

type UserStoreActions = {
  setGoogleAnalyticsAccepted: (privacy: ServicePrivacy) => void;
  setClarityAccepted: (privacy: ServicePrivacy) => void;
  disableGoogleAnalytics: () => void;
  disableClarity: () => void;
};

const initialStoreData: UserStoreData = {
  googleAnalytics: { isEnabled: false, expiriesOn: null },
  clarity: { isEnabled: false, expiriesOn: null },
};

export type State = UserStoreData & UserStoreActions;

export const useUserStore = create<State>()(
  persist(
    (set) => ({
      ...initialStoreData,
      setGoogleAnalyticsAccepted: (privacy) =>
        set({ googleAnalytics: privacy }),
      setClarityAccepted: (privacy) => set({ clarity: privacy }),
      disableGoogleAnalytics: () =>
        set({
          googleAnalytics: {
            isEnabled: false,
            expiriesOn: null,
          },
        }),
      disableClarity: () =>
        set({
          clarity: {
            isEnabled: false,
            expiriesOn: null,
          },
        }),
    }),
    {
      name: 'user-storage',
    }
  )
);