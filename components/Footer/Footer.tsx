import { Box, Center, Container, Divider, Flex } from '@mantine/core';
import React from 'react';
import { Typography } from '../Typography/Typohraphy';
import { FooterNavigation } from './components/FooterNavigation';
import { Socials } from './components/Socials';
import { APP_NAME } from '@/config';
import { ContactForm } from '../ContactForm/ContactForm';
import Image from 'next/image';

type FooterProps = {
  lang: string;
};

export const Footer = ({ lang }: FooterProps) => {
  return (
    <Box w={'100%'} pb={20}>
      <Container fluid pt={50} pb={40}>
        <ContactForm lang={lang} type="footer" />
      </Container>
      <Container>
        <Flex
          w={'100%'}
          justify={'space-between'}
          direction={{ base: 'column', sm: 'row' }}
          align={'flex-start'}
          gap={10}
        >
          <Flex align={'center'} gap={10}>
            <Image
              width={200}
              height={200}
              src={'/logo_tkai.png'}
              alt="logo"
              style={{
                display: 'block',
                width: '30px',
                height: 'auto',
                marginTop: '4px',
              }}
            />
            <Typography fz={34} fw={700} lh={1} display={'block'}>
              {APP_NAME}
            </Typography>
          </Flex>

          <Flex direction={'column'} gap={20}>
            <Typography fz={26} fw={500}>
              Kontakt
            </Typography>

            <Flex direction={'column'} gap={10}>
              <Typography fz={18} fw={500}>
                Karol Sapiołko Narevka
              </Typography>

              <Flex direction={'row'} gap={5}>
                <Typography fz={18} fw={400}>
                  NIP:
                </Typography>
                <Typography fz={18} fw={500}>
                  6030083353
                </Typography>
              </Flex>

              <Flex direction={'row'} gap={5}>
                <Typography fz={18} fw={500}>
                  17-220 Narewka{' '}
                </Typography>
              </Flex>

              <Flex direction={'row'} gap={5}>
                <Typography fz={18} fw={500}>
                  Hajnowska 1 A{' '}
                </Typography>
              </Flex>

              <Flex direction={'row'} gap={5}>
                <Typography fz={18} fw={400}>
                  email:
                </Typography>
                <Typography fz={18} fw={500}>
                  info@toknowai.pl
                </Typography>
              </Flex>

            </Flex>
          </Flex>
          <FooterNavigation lang={lang} />

          <Socials lang={lang} />
        </Flex>
      </Container>
      <Divider mt={50} mb={20} color={'shapeLine.9'} />
      <Center>
        <Typography>
          ©{new Date().getFullYear()} ToknowAI by Karol Sapiołko Narevka
        </Typography>
      </Center>
    </Box>
  );
};
