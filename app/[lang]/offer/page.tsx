import Image from 'next/image';
import {
  BackgroundImage,
  Box,
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

type Params = I18nProps;
type PageProps = {
  params: Params;
};
export default async function Offer({ params: { lang } }: PageProps) {
  const { data } = await findAllOffers();
  const offers = data ?? [];

  //   const isLogged = await currentUser();
  //   const user = isLogged ? await getCurrentUser(isLogged.id) : null;

  return (
    <BackgroundImage
      src={'/background/polygonSVG.svg'}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: "black",
        zIndex: -1,
      }}
    >
      <Container pt={100} pb={100}>
        <Box w={'100%'}>
          <Typography tt={'uppercase'}>Aktualne kursy</Typography>
          <SimpleGrid cols={2} spacing="lg" mt={20}>
            {offers.map(offer => (
              <OfferCard
                key={offer.id}
                lang={lang}
                offer={offer}
                isEmailConfirmed={true} // Example value, replace with actual logic
                userCoursesIds={[1, 2]} // Example value, replace with actual logic
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </BackgroundImage>
  );
}