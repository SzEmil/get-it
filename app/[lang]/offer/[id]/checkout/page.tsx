import Image from 'next/image';
import { BackgroundImage, Box, Container, Text } from '@mantine/core'; // Imported Text component
import { Typography } from '@/components/Typography/Typohraphy';
import { I18nProps } from '@/types/types';
import { addLanguagesToStaticParams } from '@/i18n/helpers';
import {
  findOfferById,
  findOffersIdsToGenereateParams,
} from '@/lib/actions/offer';
import { currentUser } from '@clerk/nextjs/server';
import { getUserCourses } from '@/lib/actions/user.actions';
// import { Checkout } from '@/components/Checkout/Checkout';
import { SignedIn } from '@clerk/nextjs';
import dynamic from 'next/dynamic';

export const revalidate = 600;

export async function generateStaticParams() {
  const offers = await findOffersIdsToGenereateParams();
  const stringIds = offers.map(offer => ({ id: offer.id.toString() }));
  return addLanguagesToStaticParams(stringIds);
}

type Params = I18nProps & {
  id: string;
};

type PageProps = {
  params: Params;
};

type CheckoutProps = {
  lang: string;
  offer: any;
};

// Lazy load the Checkout component with type definition
const Checkout = dynamic(() => import('@/components/Checkout/Checkout'), {
  ssr: false,
});

export default async function CheckoutPage({
  params: { lang, id },
}: PageProps) {
  const { data: offer } = await findOfferById(+id);

  if (!offer) {
    return (
      <Box pt={100}>
        <Container>
          <Text>Nie znaleziono produktu</Text>
        </Container>
      </Box>
    );
  }

  // const isLogged = await currentUser();
  // const user = isLogged ? await getUserCourses(isLogged.id) : null;

  const alreadyOwnsCourse = false;
  // user?.data?.courses.some(
  //   course => course.id === +id
  // );

  if (alreadyOwnsCourse) {
    return (
      <Box pt={100}>
        <Container>
          <Text>Posiadasz już ten kurs.</Text>
        </Container>
      </Box>
    );
  }

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
      <Container pt={150} w={'100%'}>
        <Checkout lang={lang} offer={offer} />
      </Container>
    </BackgroundImage>
  );
}
