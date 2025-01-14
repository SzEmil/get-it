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
import { CourseType, I18nProps } from '@/types/types';
import {
  addLanguagesToStaticParams,
  getLanguagesStaticParams,
} from '@/i18n/helpers';
import { auth } from '@clerk/nextjs/server';
import OrderSummaryAfterPayment from '@/components/OrderSummaryAfterPayment/OrderSummaryAfterPayment';

type Params = { id: string } & I18nProps;
type PageProps = {
  params: Params;
};
export default async function OrderId({ params: { lang, id } }: PageProps) {
  const { userId } = auth();
  if (!userId) {
    return <div>You need to be logged in to view this page.</div>;
  }
  //const course = await findUserCourseById(Number(userId), Number(courseId));

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
        <Flex
          w={'100%'}
          h={'80vh'}
          display={'flex'}
          justify={'center'}
          align={'center'}
        >
          <OrderSummaryAfterPayment id={id} />
        </Flex>
      </Container>
    </BackgroundImage>
  );
}
