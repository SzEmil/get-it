'use client';

import { MantineProvider } from '@mantine/core';
import { ReactNode, useState } from 'react';
import { theme } from '@/theme/theme';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
