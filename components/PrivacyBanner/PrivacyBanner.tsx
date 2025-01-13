'use client';

import { Box } from '@mantine/core';
import { Banner } from './components/Banner/Banner';
import { GoogleAnalyticsScript } from './components/GoogleScript';
import { Suspense } from 'react';
import { ClarityScript } from './components/ClarityScript';
import { useValidatePrivacy } from '@/hooks/useValidatePrivacy';
import { useUserStore } from '@/stores/user/user.store';

type PrivacyBannerProps = {
  lang: string;
};

const PrivacyBanner = ({ lang }: PrivacyBannerProps) => {
  const isPrivacyValid = useValidatePrivacy();

  const googleAnalyticsEnabled = useUserStore(
    state => state.googleAnalytics.isEnabled
  );
  const clarityEnabled = useUserStore(state => state.clarity.isEnabled);

  return (
    <Box>
      {/* Wyświetl baner, jeśli prywatność nie została zaakceptowana */}
      {isPrivacyValid === null && <Banner />}
      <Suspense>
        {isPrivacyValid && (
          <>
            {googleAnalyticsEnabled && <GoogleAnalyticsScript />}
            {clarityEnabled && <ClarityScript />}
          </>
        )}
      </Suspense>
    </Box>
  );
};
export default PrivacyBanner;
