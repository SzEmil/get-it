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
      {/* Optymalizowany obraz jako tło */}
      <Image
        src="/background/polygonSVG.svg"
        alt="Tło strony"
        fill
        style={{ objectFit: 'cover' }}
        quality={75}
        priority
      />
      <Container pt={100} pb={100}>
        <Box w={'100%'}>
          <Center>
            <Typography tt={'uppercase'} fw={700} fz={38}>
              Profil
            </Typography>
          </Center>
          {/* Suspense dla UserData */}
          <Suspense fallback={<Text>=</Text>}>
            <UserData />
          </Suspense>
          {/* Suspense dla MyPaymentsList */}

            <MyPaymentsList lang={lang} />
  
        </Box>
      </Container>
    </div>
  );
}
