import Image from 'next/image';
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Text,
} from '@mantine/core'; // Imported Text component
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
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Routes } from '@/constants/endpoints';
import { Suspense } from 'react';

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

  const isLogged = await currentUser();

  // if (!isLogged) {
  //   return (
  //     <Box pt={100}>
  //       <Container>
  //         <Text>Zaloguj się aby kupić</Text>
  //       </Container>
  //     </Box>
  //   );
  // }

  const user = isLogged ? await getUserCourses(isLogged.id) : null;

  const alreadyOwnsCourse = user?.data?.courses.some(
    course => course.id === +id
  );

  if (!user || !user.data) {
    return (
      <Box pt={150}>
        <Container display={'flex'} w={'100%'}>
          <Flex justify={'center'} gap={20} w={'100%'} align={'center'}>
            <Box
              style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
            >
              <Text>Zaloguj się aby kupić.</Text>
              <Button component={Link} href={Routes.signIn}>
                Zaloguj się
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  }

  if (alreadyOwnsCourse) {
    return (
      <Box pt={150}>
        <Container display={'flex'} w={'100%'}>
          <Flex justify={'center'} gap={20} w={'100%'} align={'center'}>
            <Box
              style={{
                display: 'flex',
                gap: '20px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>Posiadasz już ten kurs.</Text>
              <Button component={Link} href={Routes.myCourses}>
                Przejdź do Twoich kursów
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Optymalizowany obraz jako tło */}
      <Image
        src="/background/polygonSVG.svg"
        alt="Tło strony"
        fill
        style={{ objectFit: 'cover' }}
        quality={75}
        priority
      />

      <Container
        pt={150}
        w={'100%'}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Suspense>
          <Checkout lang={lang} offer={offer} userId={+user?.data.id} />
        </Suspense>
      </Container>
    </div>
  );
}
