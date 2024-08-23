"use client";

import { Box } from "@mantine/core";
import { Banner } from "./components/Banner/Banner";
import { GoogleAnalyticsScript } from "./components/GoogleScript";
import { Suspense } from "react";
import { ClarityScript } from "./components/ClarityScript";
import { useValidatePrivacy } from "@/hooks/useValidatePrivacy";

type PrivacyBannerProps = {
  lang: string;
};

export const PrivacyBanner = ({ lang }: PrivacyBannerProps) => {
  const isPrivacyValid = useValidatePrivacy();

  return (
    <Box>
      {isPrivacyValid === null && <Banner lang={lang} />}
      <Suspense>
        {isPrivacyValid && (
          <>
            <GoogleAnalyticsScript />
            {/* <ClarityScript /> */}
          </>
        )}
      </Suspense>
    </Box>
  );
};
