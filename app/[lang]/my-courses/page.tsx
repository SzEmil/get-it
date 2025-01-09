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

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type PageProps = {
  params: Params;
};
const MyCoursesList = dynamic(
  () => import('@/components/MyCoursesList/MyCoursesList'),
  {
    suspense: true,
  }
);

export default async function MyCourses({ params: { lang } }: PageProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
      }}
    >
      {/* Optymalizowany obraz tła */}
      <Image
        src="/background/polygonSVG.svg"
        alt="Tło strony"
        fill // Zastępuje layout="fill"
        style={{ objectFit: 'cover' }} // Zastępuje objectFit="cover"
        quality={75}
        priority
      />

      {/* Zawartość strony */}
      <Container pt={100} pb={100} style={{ position: 'relative', zIndex: 1 }}>
        <Box w={'100%'}>
          <Center>
            <Typography tt={'uppercase'} fw={700} fz={38}>
              Moje kursy
            </Typography>
          </Center>
          <Center>
            {/* Suspense dla MyCoursesList */}
            <Suspense fallback={<p></p>}>
              <MyCoursesList lang={lang} />
            </Suspense>
          </Center>
        </Box>
      </Container>
    </div>
  );
}
