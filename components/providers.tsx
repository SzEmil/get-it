'use client';

import { MantineProvider } from '@mantine/core';
import { ReactNode, useState } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <MantineProvider>{children}</MantineProvider>;
};
