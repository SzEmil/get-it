import React from 'react';
import * as DB from '@prisma/client';
import { Flex, Text } from '@mantine/core';
import { PaymentWithOrdrCourse } from '../MyPaymentsList';

type MyPaymentsItemProps = {
  lang: string;
  payment: PaymentWithOrdrCourse;
};

export const MyPaymentsItem = ({ lang, payment }: MyPaymentsItemProps) => {
  return (
    <Flex w={'100%'} justify={'space-between'} align={'flex-start'} p={10}>
      <Flex direction={'column'}>
        <Text>
          Produkt: {payment.courses.map(course => course.courseName).join(', ')}
        </Text>
        <Text>Status: {payment.paymentStatus}</Text>
        <Text>Email: {payment.email}</Text>
      </Flex>
      <Flex direction={'column'} ta={"right"}>
        <Text>ID płatności: {payment.paymentSessionId}</Text>
        <Text>
          Kwota: {payment.amount} {payment.currency}
        </Text>
        <Text>{payment.updatedAt.toLocaleDateString()}</Text>
      </Flex>
    </Flex>
  );
};
