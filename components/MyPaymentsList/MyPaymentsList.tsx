'use client';

import { useUser } from '@clerk/nextjs';
import { Center, Flex, Loader, Text } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import * as DB from '@prisma/client';
import { MyPaymentsItem } from './components/MyPaymentsItem';
import { findUserPayments } from '@/lib/actions/payment.actions';

type MyPaymentsListPropss = {
  lang: string;
};

export type PaymentWithOrdrCourse = {
  courses: DB.OrderCourse[];
} & DB.Payment;

export const MyPaymentsList = ({ lang }: MyPaymentsListPropss) => {
  const [payments, setPayments] = useState<PaymentWithOrdrCourse[]>([]);
  const [loading, setLoading] = useState(false);

  const { isLoaded, user } = useUser();

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    try {
      if (user && isLoaded) {
        const coursesData = await findUserPayments(+user.id);
        console.log(coursesData);
        setPayments(coursesData.data ?? []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [user, isLoaded]);

  useEffect(() => {
    if (user && isLoaded) {
      fetchCourses();
    }
  }, [fetchCourses]);

  return (
    <Flex direction={'column'} gap={50} w={'100%'} mt={80}>
      {loading ? (
        <Center w={'100%'}>
          <Loader mt={50} />
        </Center>
      ) : (
        <Flex
          w={'100%'}
          direction={'column'}
          gap={20}
          bg={'rgba(0,0,0,0.5)'}
          p={10}
          style={{ borderRadius: '10px' }}
        >
          <Text fz={24} fw={700} c={'white'}>
            Płatności
          </Text>
          {payments.map(payment => (
            <MyPaymentsItem key={payment.id} lang={lang} payment={payment} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};
