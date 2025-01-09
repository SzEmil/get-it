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

export const metadata = SEO.offerPageMetadata;

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type PageProps = {
  params: Params;
};

const OfferCard = dynamic(() => import('@/components/OfferCard/OfferCard'), {
  suspense: true,
});

export default async function Offer({ params: { lang } }: PageProps) {
  const { data } = await findAllOffers();
  const offers = data ?? [];

  const isLogged = await currentUser();
  //const user = isLogged ? await getCurrentUser(isLogged.id) : null;
  const user = isLogged ? await getCurrentUser(isLogged.id) : null;
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
              Aktualne kursy
            </Typography>
          </Center>
          <Center>
            <Flex wrap={'wrap'} justify={'center'} gap={50} mt={50}>
              <Suspense fallback={<p></p>}>
                {offers.map(offer => (
                  <OfferCard
                    key={offer.id}
                    lang={lang}
                    offer={offer}
                    userCoursesIds={
                      user?.courses
                        ? user.courses.map(course => course.courseId)
                        : []
                    }
                  />
                ))}
              </Suspense>
            </Flex>
          </Center>
        </Box>
      </Container>
    </div>
  );
}
