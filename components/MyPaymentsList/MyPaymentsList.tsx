'use client';

import { useUser } from '@clerk/nextjs';

import { Button, Center, Flex, Loader, Text } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import * as DB from '@prisma/client';
import { MyPaymentsItem } from './components/MyPaymentsItem';
import { findUserPayments } from '@/lib/actions/payment.actions';

import { createInvoice, sendInvoiceById } from '@/lib/actions/invoice.actions';

type MyPaymentsListPropss = {
  lang: string;
};

export type PaymentWithOrdrCourse = {
  courses: DB.OrderCourse[];
  invoices: DB.Invoice[];
} & DB.Payment;

const MyPaymentsList = ({ lang }: MyPaymentsListPropss) => {
  const [payments, setPayments] = useState<PaymentWithOrdrCourse[]>([]);
  const [loading, setLoading] = useState(false);

  const { isLoaded, user } = useUser();

  const fetchPayments = useCallback(async () => {
    setLoading(true);
    try {
      if (user && isLoaded) {
        const paymentsData = await findUserPayments(
          //@ts-ignore
          +user.publicMetadata.userId
        );
        setPayments(paymentsData.data ?? []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [user, isLoaded]);

  useEffect(() => {
    if (user && isLoaded) {
      fetchPayments();
    }
  }, [fetchPayments]);

  const handleTestInvoice = async () => {
    await createInvoice(40);
  };
  return (
    <Flex
      direction={'column'}
      gap={50}
      w={'100%'}
      mt={80}
      mah={700}
      style={{ overflow: 'scroll' }}
    >
      {/* <Button onClick={handleTestInvoice}>Wyslij fakture o id 8</Button> */}
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

export default MyPaymentsList;
