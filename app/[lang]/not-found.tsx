import { Box, Button, Flex } from '@mantine/core';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Flex w={'100%'} h={'80vh'} align={'center'} justify={'center'}>
      <Box c={"white"}>
        Wyszukana przez Ciebie witryna nie istnieje
        <Flex gap={10} mt={25} justify={'center'} c={"white"}>
          Powrót do strony głównej
        </Flex>
      </Box>
    </Flex>
  );
}
