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
import { MyPaymentsList } from '@/components/MyPaymentsList/MyPaymentsList';
import { UserData } from '@/components/UserData/UserData';

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type PageProps = {
  params: Params;
};
export default async function Profile({ params: { lang } }: PageProps) {
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
              Profil
            </Typography>
          </Center>
          <UserData />
          <MyPaymentsList lang={lang} />
        </Box>
      </Container>
    </BackgroundImage>
  );
}
