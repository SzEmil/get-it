import Image from 'next/image';
import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Flex,
  SimpleGrid,
} from '@mantine/core';
import { Typography } from '@/components/Typography/Typohraphy';
import { I18nProps } from '@/types/types';
import { getLanguagesStaticParams } from '@/i18n/helpers';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { auth } from '@clerk/nextjs/server';
import { getCurrentUser } from '@/lib/actions/user.actions';
import { Role } from '@prisma/client';
import Dashboard from '@/components/Dashboard/Dashboard';

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type PageProps = {
  params: Params;
};

export default async function MyCourses({ params: { lang } }: PageProps) {
  const { userId } = auth();
  if (!userId) {
    return <div>You need to be logged in to view this page.</div>;
  }

  const userResponse = await getCurrentUser(userId);

  if (!userResponse || userResponse.role !== Role.ADMIN) {
    return <div>Nie masz dostepu do zawartości.</div>;
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
      }}
    >
      {/* Zawartość strony */}
      <Container pt={100} pb={100} style={{ position: 'relative', zIndex: 1 }}>
        <Box w={'100%'}>
          <Center>
            <Typography tt={'uppercase'} fw={700} fz={38}>
              Dashboard
            </Typography>
          </Center>

          <Dashboard />
        </Box>
      </Container>
    </div>
  );
}
