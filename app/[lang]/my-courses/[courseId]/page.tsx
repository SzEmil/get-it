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
import { getLanguagesStaticParams } from '@/i18n/helpers';
import { auth } from '@clerk/nextjs/server';
import { findUserCourseById } from '@/lib/actions/course';
import { getUserClerkId } from '@/lib/actions/user.actions';
import { CourseLayout } from '@/components/Course/Course';

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = { courseId: string } & I18nProps;
type PageProps = {
  params: Params;
};
export default async function Course({
  params: { lang, courseId },
}: PageProps) {
  const { userId } = auth();
  if (!userId) {
    return <div>You need to be logged in to view this page.</div>;
  }

  const user = await getUserClerkId(userId);
  const { data } = await findUserCourseById({
    userId: +user.id,
    courseId: +courseId,
  });
  const courseData = data as CourseType;
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
          <CourseLayout course={courseData} />
        </Box>
      </Container>
    </BackgroundImage>
  );
}
