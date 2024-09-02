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
import { OfferCard } from '@/components/OfferCard/OfferCard';
import { currentUser } from '@clerk/nextjs/server';
import { getCurrentUser } from '@/lib/actions/user.actions';
import { GetServerSideProps } from 'next';
import { getLanguagesStaticParams } from '@/i18n/helpers';

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type PageProps = {
  params: Params;
};
export default async function Offer({ params: { lang } }: PageProps) {
  const { data } = await findAllOffers();
  const offers = data ?? [];

  const isLogged = await currentUser();
  //const user = isLogged ? await getCurrentUser(isLogged.id) : null;
  const user = await getCurrentUser(isLogged!.id);
  return (
    <BackgroundImage
      src={'/background/polygonSVG.svg'}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
        zIndex: -1,
      }}
    >
      <Container pt={100} pb={100}>
        <Box w={'100%'}>
          <Center>
            <Typography tt={'uppercase'} fw={700} fz={38}>
              Aktualne kursy
            </Typography>
          </Center>
          <Center>
            <SimpleGrid cols={2} spacing="100px" mt={50}>
              {offers.map(offer => (
                <OfferCard
                  key={offer.id}
                  lang={lang}
                  offer={offer}
                  userCoursesIds={user?.courses ? user.courses.map((course) => course.courseId) : []}
                />
              ))}
            </SimpleGrid>
          </Center>
        </Box>
      </Container>
    </BackgroundImage>
  );
}
