import { Typography } from '@/components/Typography/Typohraphy';
import { Flex } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { Routes } from '@/constants/endpoints';

type FooterNavigationProps = {
  lang: string;
};

export const FooterNavigation = ({ lang }: FooterNavigationProps) => {
  return (
    <Flex gap={20} justify={'space-between'}>
      <Flex direction={'column'} gap={20}>
        <Typography fz={26} fw={500}>
          Centrum pomocy
        </Typography>
        <Link href={Routes.termsOfService}>
          Regulamin Sprzedaży i Polityka Zwrotów
        </Link>
        <Link href={Routes.privacyPolicy}>Polityka prwyatności</Link>
        <Link href={Routes.privacyPolicy}>Zasady korzsytania z cookies</Link>
      </Flex>
    </Flex>
  );
};
