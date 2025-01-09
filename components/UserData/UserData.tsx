'use client';

import { useUser } from '@clerk/nextjs';
import { Flex, Text } from '@mantine/core';

 const UserData = () => {
  const { user } = useUser();
  return (
    <Flex
      direction={'column'}
      gap={30}
      w={'100%'}
      mt={80}
      bg={'rgba(0,0,0,0.5)'}
      style={{ borderRadius: '10px' }}
      p={10}
    >
      <Text fz={24} fw={700} c={'white'}>
        Dane użytkownika
      </Text>
      <Flex w={'100%'} direction={'column'} gap={20}>
        <Flex gap={30} align={'center'}>
          <Text fz={18} fw={500} c={'white'}>
            Imię i nazwisko:
          </Text>
          <Text fz={18} fw={600} c={'white'}>
            {user?.firstName} {user?.lastName}
          </Text>
        </Flex>
        <Flex gap={30} align={'center'}>
          <Text fz={18} fw={500} c={'white'}>
            Email:
          </Text>
          <Text fz={18} fw={600} c={'white'}>
            {user?.emailAddresses.map(email => email).join(',')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserData