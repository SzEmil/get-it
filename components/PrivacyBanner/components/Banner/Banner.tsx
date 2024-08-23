'use client';

import { Button, Flex, Text } from '@mantine/core';
import { useState } from 'react';
import { useUserStore } from '../../../../stores/user/user.store';
import css from './Banner.module.css';

type BannerProps = {
  lang: string;
};

export const Banner = ({ lang }: BannerProps) => {
  const { setIsAnalyticsAccepted, setAnalyticsDisabled } = useUserStore();
  const [isBanerOpen, setIsBanerOpen] = useState(true);

  const handleDenyCookies = () => {
    setIsBanerOpen(false);
    setAnalyticsDisabled();
  };
  const handleAcceptCookies = () => {
    const privacyData = {
      isAnalytics: true,
      expiriesOn: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    };
    setIsAnalyticsAccepted(privacyData);
    setIsBanerOpen(false);
  };

  if (!isBanerOpen) {
    return null;
  }
  return (
    <Flex
      style={{ zIndex: 9999 }}
      pt={10}
      pb={10}
      pl={20}
      pr={20}
      w={'100%'}
      bg={'themeSecondary.6'}
      align={'center'}
      justify={'center'}
      pos={'fixed'}
      bottom={0}
      className={css.banner}
    >
      <Flex
        maw={1200}
        w={'100%'}
        wrap={'wrap'}
        align={'center'}
        justify={'center'}
        gap={10}
      >
        <Text c={'grayscaleWhite.0'} maw={1000} fw={500}>
          Aby zapewnić Ci jak najlepsze wrażenia i udoskonalić nasze produkty,
          wykorzystujemy narzędzia analityczne od Microsoft Clarity i Google
          Analitycs do zbierania danych dotyczących korzystania z naszej strony
          internetowej. Korzystając z naszej witryny, wyrażasz zgodę na
          gromadzenie i wykorzystywanie tych danych przez nas i Microsoft.
        </Text>
        <Flex gap={40}>
          <Button
            onClick={handleDenyCookies}
            variant="outline"
            color={'grayscaleWhite.0'}
          >
            Odmów
          </Button>
          <Button onClick={handleAcceptCookies}>Akceptuj</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
