import Image from 'next/image';
import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { Typography } from '@/components/Typography/Typohraphy';
import { I18nProps } from '@/types/types';
import { getLanguagesStaticParams } from '@/i18n/helpers';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import MyPaymentsList from '@/components/MyPaymentsList/MyPaymentsList';

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type PageProps = {
  params: Params;
};

const UserData = dynamic(() => import('@/components/UserData/UserData'), {
  suspense: true,
});

export default async function Profile({ params: { lang } }: PageProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
      }}
    >
      {/* Obraz tła */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Obraz znajduje się pod treścią
        }}
      >
        <Image
          src="/background/polygonSVG.svg"
          alt="Tło strony"
          fill
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
        />
      </div>

      {/* Treść */}
      <Container pt={100} pb={100} style={{ position: 'relative', zIndex: 1 }}>
        <Box w={'100%'}>
          <Center>
            <Typography tt={'uppercase'} fw={700} fz={38}>
              Profil
            </Typography>
          </Center>

          {/* Suspense dla UserData */}
          <Suspense fallback={<Text>Ładowanie danych użytkownika...</Text>}>
            <UserData />
          </Suspense>

          {/* Suspense dla MyPaymentsList */}
          <Suspense fallback={<Text>Ładowanie listy płatności...</Text>}>
            <MyPaymentsList lang={lang} />
          </Suspense>
        </Box>
      </Container>
    </div>
  );
}
