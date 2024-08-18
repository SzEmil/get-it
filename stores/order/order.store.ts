import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { State } from './order.types';
import { CUSTOMER_INITIAL_STATE } from '@/constants';

export const useOrderStore = create<State>()(
  persist(
    (set, get) => ({
      customer: CUSTOMER_INITIAL_STATE,
      areTermsAccepted: false,
      paymentInProgress: false,

      setCustomer: newCustomer => set({ customer: { ...newCustomer } }),
      setPaymentInProgress: paymentState =>
        set({ paymentInProgress: paymentState }),
      setAcceptTerms: () => set({ areTermsAccepted: !get().areTermsAccepted }),
    }),
    {
      name: 'order-storage',
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !['paymentInProgress', 'areTermsAccepted'].includes(key)
          )
        ),
    }
  )
);
