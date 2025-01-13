'use client';

import { useUserStore } from "../stores/user/user.store";

export const useValidatePrivacy = () => {
  const googleAnalytics = useUserStore((state) => state.googleAnalytics);
  const clarity = useUserStore((state) => state.clarity);

  const isServiceValid = (service: { isEnabled: boolean; expiriesOn: Date | null }) => {
    if (!service.isEnabled) return false;
    if (service.expiriesOn) {
      const today = new Date();
      const expirationDate = new Date(service.expiriesOn);
      return expirationDate >= today;
    }
    return false;
  };

  const isGoogleAnalyticsValid = isServiceValid(googleAnalytics);
  const isClarityValid = isServiceValid(clarity);

  // Jeśli oba stany są wyłączone lub wygasły, zwróć null (wyświetli baner)
  if (!isGoogleAnalyticsValid && !isClarityValid) return null;

  // Jeśli jakakolwiek usługa jest włączona i ważna, zwróć true
  return true;
};
