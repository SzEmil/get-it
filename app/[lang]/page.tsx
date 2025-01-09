import Image from 'next/image';
import { Box, Stack } from '@mantine/core';
import { Typography } from '@/components/Typography/Typohraphy';
import Banner from '@/components/Banner/Banner';
import { I18nProps } from '@/types/types';
// import { TrailerSection } from '@/components/TrailerSection/TrailerSection';
// import { WhyChoseCourse } from '@/components/WhyChoseThisCourse/WhyChoseCourse';
// import { WhatYouWillAchieve } from '@/components/WhatYouWillAchive/WhatYouWillAchive';
// import { CourseProgram } from '@/components/CourseProgram/CourseProgram';
// import { CourseDemo } from '@/components/CourseDemo/CourseDemo';
// import { Guarantee } from '@/components/Guarantee/Guarantee';
// import { CallToAction } from '@/components/CallToAction/CallToAction';
// import { FAQ } from '@/components/FAQ/FAQ';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const TrailerSection = dynamic(
  () => import('@/components/TrailerSection/TrailerSection')
);
const WhyChoseCourse = dynamic(
  () => import('@/components/WhyChoseThisCourse/WhyChoseCourse')
);
const WhatYouWillAchieve = dynamic(
  () => import('@/components/WhatYouWillAchive/WhatYouWillAchive')
);
const CourseProgram = dynamic(
  () => import('@/components/CourseProgram/CourseProgram')
);
const CourseDemo = dynamic(() => import('@/components/CourseDemo/CourseDemo'));
const Guarantee = dynamic(() => import('@/components/Guarantee/Guarantee'));
const CallToAction = dynamic(
  () => import('@/components/CallToAction/CallToAction')
);
const FAQ = dynamic(() => import('@/components/FAQ/FAQ'));

type Params = I18nProps;
type PageProps = {
  params: Params;
};
export default function Home({ params: { lang } }: PageProps) {
  return (
    <Box pt={0}>
      <Banner lang={lang} />
      <Stack gap={10}>
        <Suspense fallback={<div></div>}>
          <TrailerSection />
          <WhyChoseCourse />
          <WhatYouWillAchieve />
          <CourseProgram />
          <CourseDemo />
          <Guarantee />
          <CallToAction />
          <FAQ />
        </Suspense>
      </Stack>
    </Box>
  );
}
