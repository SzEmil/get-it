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
import { Role, User } from '@prisma/client';
import { getCurrentUser } from '@/lib/actions/user.actions';

type UserBtnProps = {
  lang: string;
};

export const UserBtn = ({ lang }: UserBtnProps) => {
  const { user } = useUser();

  const [userData, setUserData] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      setUserLoading(true);
      try {
        const userResponse = await getCurrentUser(user.id);
        if (userResponse) {
          setUserData(userResponse);
        }
      } catch (error) {
        console.error('Błąd podczas pobierania użytkownika:', error);
      } finally {
        setUserLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

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

          {!userLoading && userData && userData.role === Role.ADMIN && (
            <Link href={Routes.admin}>
              <Button variant="light" fullWidth>
                Dashboard
              </Button>
            </Link>
          )}

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
