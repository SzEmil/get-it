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
import { ContactForm } from '@/components/ContactForm/ContactForm';

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type PageProps = {
  params: Params;
};
export default async function Offer({ params: { lang } }: PageProps) {
    const isLogged = await currentUser();
    const user = isLogged ? await getCurrentUser(isLogged.id) : null;
  
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
            <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
              Kontakt
            </h2>
            <ContactForm
              lang={lang}
              type="contactPage"
              userEmail={user?.email || undefined} // Przekazujemy email użytkownika, jeśli jest zalogowany
            />
          </Box>
        </Container>
      </BackgroundImage>
    );
  }