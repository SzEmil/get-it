'use client';

import { useOrderForm } from '@/hooks/useOrderForm';
import { useOrderStore } from '@/stores/order/order.store';
import { Box, Flex, TextInput, Checkbox, Button } from '@mantine/core';
import React, { useEffect } from 'react';
import * as DB from '@prisma/client';
import { OrderSummary } from './components/OrderSummary';
import css from './Checkout.module.css';
import { Customer } from '@/stores/order/order.types';
import { createOrder } from '@/lib/actions/orderProcessing';
import { OrderData } from '@/types/types';
import { useRouter } from 'next/navigation';
import { notify } from '@/app/services/Email/notifications';

type CheckoutProps = {
  lang: string;
  offer: DB.Offer;
  userId: number;
};

const Checkout = ({ lang, offer, userId }: CheckoutProps) => {
  const router = useRouter();
  const { setCustomer } = useOrderStore();
  const customerForm = useOrderForm(lang);

  useEffect(() => {
    setCustomer(customerForm.values);
  }, [customerForm.values, setCustomer]);

  const onSubmitCheckoutForm = async (values: Customer) => {
    const orderData: OrderData = {
      customer: values,
      userId,
      courses: [
        {
          courseId: offer.courseId,
          courseName: offer.name,
          amount: offer.price,
          currency: offer.currency,
        },
      ],
    };
    //  const data = await createOrder(orderData);

    //  if (data.data) router.push(data.data?.paymentUrl);
    notify.onErrorMessage('Płatności są obecnie nieaktywne');
  };

  return (
    <Flex w={'100%'} justify={'space-between'} align={'flex-start'}>
      <form
        onSubmit={customerForm.onSubmit(values => onSubmitCheckoutForm(values))}
        style={{ width: '100%', maxWidth: '700px' }}
      >
        <Box w={'100%'}>
          <Flex gap="md" mb="sm">
            <TextInput
              label="Imię"
              placeholder="Imię"
              {...customerForm.getInputProps('firstName')}
              required
              classNames={{ input: css.input }}
              style={{ flex: 1 }}
            />
            <TextInput
              label="Nazwisko"
              placeholder="Nazwisko"
              {...customerForm.getInputProps('lastName')}
              required
              classNames={{ input: css.input }}
              style={{ flex: 1 }}
            />
          </Flex>

          <TextInput
            label="Email"
            placeholder="Email"
            {...customerForm.getInputProps('email')}
            required
            mt="sm"
            classNames={{ input: css.input }}
          />
          <TextInput
            label="Adres"
            placeholder="Adres"
            {...customerForm.getInputProps('address')}
            required
            mt="sm"
            classNames={{ input: css.input }}
          />

          {/* Kod pocztowy i Miasto w jednym wierszu */}
          <Flex gap="md" mt="sm" mb="sm">
            <TextInput
              label="Kod pocztowy"
              placeholder="Kod pocztowy"
              {...customerForm.getInputProps('postalCode')}
              required
              classNames={{ input: css.input }}
              style={{ flex: 1 }}
            />
            <TextInput
              label="Miasto"
              placeholder="Miasto"
              {...customerForm.getInputProps('city')}
              required
              classNames={{ input: css.input }}
              style={{ flex: 2 }}
            />
          </Flex>

          <TextInput
            label="Kraj"
            placeholder="Kraj"
            {...customerForm.getInputProps('country')}
            required
            mt="sm"
            classNames={{ input: css.input }}
          />
          <TextInput
            label="Telefon"
            placeholder="Telefon"
            {...customerForm.getInputProps('phone')}
            required
            mt="sm"
            classNames={{ input: css.input }}
          />
          <Checkbox
            label="Akceptuję regulamin"
            {...customerForm.getInputProps('acceptedTerms', {
              type: 'checkbox',
            })}
            required
            mt="md"
            c={'white'}
            classNames={{ input: css.input }}
            color={'themePrimary.0'}
          />
          <Button
            type="submit"
            fullWidth
            mt="xl"
            size="md"
            radius={20}
            color={'themePrimary.0'}
          >
            Złóż zamówienie
          </Button>
        </Box>
      </form>
      <OrderSummary offer={offer} />
    </Flex>
  );
};
export default Checkout;
