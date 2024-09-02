'use client';

import React, { useEffect, useState } from 'react';
import { SignOutButton, useUser } from '@clerk/nextjs';
import {
  Avatar,
  Button,
  Flex,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import { Routes } from '@/constants/endpoints';

type UserBtnProps = {
  lang: string;
};

export const UserBtn = ({ lang }: UserBtnProps) => {
  const { user } = useUser();

  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Avatar
          style={{ cursor: 'pointer' }}
          src={user?.imageUrl ?? null}
          radius="xl"
          color="white"
        />
      </Popover.Target>
      <Popover.Dropdown>
        <Flex direction="column" gap={10} align="stretch">
          <Text fw={500} ta="center" mb={10} c={'black'}>
            {user?.firstName} {user?.lastName}
          </Text>
          <Link href={Routes.profile}>
            <Button variant="light" fullWidth>
              Profil
            </Button>
          </Link>
          <Link href={Routes.myCourses}>
            <Button variant="light" fullWidth>
              Moje kursy
            </Button>
          </Link>

          <SignOutButton>
            <Button variant="outline" color="red" fullWidth>
              Wyloguj się
            </Button>
          </SignOutButton>
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
};
