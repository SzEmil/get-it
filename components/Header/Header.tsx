'use client';

import css from './Header.module.css';
import { Burger, Button, Drawer, Flex, Stack } from '@mantine/core';
import { Typography } from '../Typography/Typohraphy';
import { APP_NAME } from '@/config';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { SignInCustomButton } from '../SignInCustomButton/SignInCustomButton';
import { Routes } from '@/constants/endpoints';
import { HeaderNavigation } from './components/HeaderNavigation';
import { UserBtn } from '../UserBtn/UserBtn';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';

type HeaderProps = {
  lang: string;
};

export const Header = ({ lang }: HeaderProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        pl={24}
        pr={24}
        pt={15}
        pb={15}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <Link href={Routes.home}>
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
        </Link>

        {/* Desktop Navigation */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          align="center"
          style={{
            position: 'absolute', // Wyśrodkowujemy absolutnie
            left: '50%', // Punkt odniesienia: środek kontenera
            transform: 'translateX(-50%)', // Przesunięcie na środek
          }}
        >
          <HeaderNavigation lang={lang} />
        </Flex>

        {/* Mobile Menu and User Section */}
        <Flex align="center" gap={16}>
          <SignedOut>
            <SignInCustomButton lang={lang} variant="outline" color="white" />
          </SignedOut>
          <SignedIn>
            <UserBtn lang={lang} />
          </SignedIn>
          <Button
            onClick={() => setOpened(!opened)}
            display={{ base: 'block', md: 'none' }}
            style={{
              backgroundColor: 'transparent', // Przycisk bez tła
              border: 'none', // Brak obramowania
              padding: 0, // Usuń padding dla lepszej estetyki
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Otwórz menu"
          >
            <FiMenu size={24} color="white" /> {/* Ikona menu */}
          </Button>
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={APP_NAME}
        padding="md"
        size="xs"
        zIndex={99999999}
        styles={{
          content: {
            backgroundColor: 'black', // Czarny kolor tła dla Drawer
            paddingTop: '20px', // Padding od góry
          },
        }}
        overlayProps={{
          opacity: 0.55,
          blur: 3,
        }}
        withCloseButton
      >
        <Stack>
          <Link
            href={Routes.home}
            onClick={() => setOpened(false)}
            style={{
              color: 'white', // Białe linki
              textDecoration: 'none', // Usuń podkreślenie
            }}
          >
            Start
          </Link>
          <Link
            href={Routes.offer}
            onClick={() => setOpened(false)}
            style={{
              color: 'white', // Białe linki
              textDecoration: 'none', // Usuń podkreślenie
            }}
          >
            Oferta
          </Link>
          <Link
            href={Routes.contact}
            onClick={() => setOpened(false)}
            style={{
              color: 'white', // Białe linki
              textDecoration: 'none', // Usuń podkreślenie
            }}
          >
            Kontakt
          </Link>
        </Stack>
      </Drawer>
    </>
  );
};
