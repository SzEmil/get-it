'use client';

import { MantineProvider } from '@mantine/core';
import { ReactNode, useState } from 'react';
import { theme } from '@/theme/theme';
import { ClerkProvider } from '@clerk/nextjs';
import { ROUTES } from '@/constants';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (

      <MantineProvider theme={theme}>{children}</MantineProvider>
  );
};
