"use client"

import css from './Header.module.css';
import { Flex } from '@mantine/core';
import { Typography } from '../Typography/Typohraphy';
import { APP_NAME } from '@/config';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { SignInCustomButton } from '../SignInCustomButton/SignInCustomButton';
import { Routes } from '@/constants/endpoints';
import { HeaderNavigation } from './components/HeaderNavigation';

type HeaderProps = {
  lang: string;
};

export const Header = ({ lang }: HeaderProps) => {
  return (
    <Flex
      // ref={headerRef}
      direction={'row'}
      justify={'space-between'}
      align={'center'}
      pl={24}
      pr={24}
      pt={15}
      pb={15}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Link href={Routes.home}>
        <Typography fz={34} fw={700}>
          {APP_NAME}
        </Typography>
      </Link>
      <HeaderNavigation lang={lang} />
      <div>
        <SignedOut>
          <SignInCustomButton lang={lang} variant="outline" color="white" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </Flex>
  );
};
