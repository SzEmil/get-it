import Image from 'next/image';
import { Box } from '@mantine/core';
import { Typography } from '@/components/Typography/Typohraphy';
import Banner from '@/components/Banner/Banner';
import { I18nProps } from '@/types/types';
import { TrailerSection } from '@/components/TrailerSection/TrailerSection';

type Params = I18nProps;
type PageProps = {
  params: Params;
};
export default function Home({ params: { lang } }: PageProps) {
  return (
    <Box pt={0}>
      <Banner lang={lang} />
      <TrailerSection />
    </Box>
  );
}
