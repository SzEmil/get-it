import Image from 'next/image';
import { Box } from '@mantine/core';
import { Typohraphy } from '@/components/Typography/Typohraphy';

export default function Home() {
  return (
    <Box pt={80}>
      <Typohraphy>page content main</Typohraphy>
    </Box>
  );
}
