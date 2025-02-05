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
import { findAllOffers } from '@/lib/actions/offer';
import { currentUser } from '@clerk/nextjs/server';
import { getCurrentUser } from '@/lib/actions/user.actions';
import { GetServerSideProps } from 'next';
import { getLanguagesStaticParams } from '@/i18n/helpers';
import { SEO } from '@/seo';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import PublicBlogSection from '@/components/PublicBlogSection/PublicBlogSection';

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type PageProps = {
  params: Params;
};

export default async function Blog({ params: { lang } }: PageProps) {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Optymalizowany obraz jako tło */}
      <Image
        src="/background/polygonSVG.svg"
        alt="Tło strony"
        fill // Zastępuje layout="fill"
        style={{ objectFit: 'cover' }} // Zastępuje objectFit="cover"
        quality={75}
        priority
      />

      <Container pt={100} pb={100} style={{ position: 'relative', zIndex: 1 }}>
        <Box w={'100%'}>
          <Center>
            <Typography tt={'uppercase'} fw={700} fz={38}>
              Blog
            </Typography>
          </Center>
          <Center>
            <PublicBlogSection />
          </Center>
        </Box>
      </Container>
    </div>
  );
}
