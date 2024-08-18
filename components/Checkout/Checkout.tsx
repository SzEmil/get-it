'use client';

import { useOrderForm } from '@/hooks/useOrderForm';
import { useOrderStore } from '@/stores/order/order.store';
import { Box, Flex, TextInput, Checkbox, Button } from '@mantine/core';
import React, { useEffect } from 'react';
import * as DB from '@prisma/client';
import { OrderSummary } from './components/OrderSummary';
import css from './Checkout.module.css';

type CheckoutProps = {
  lang: string;
  offer: DB.Offer;
};

export const Checkout = ({ lang, offer }: CheckoutProps) => {
  const { setCustomer } = useOrderStore();
  const customerForm = useOrderForm(lang);

  useEffect(() => {
    setCustomer(customerForm.values);
  }, [customerForm.values, setCustomer]);

  return (
    <Flex w={'100%'} justify={'space-between'} align={'flex-start'}>
      <form
        onSubmit={customerForm.onSubmit(values => console.log(values))}
        style={{ width: '100%', maxWidth: '700px' }}
      >
        <Box w={'100%'}>
          {/* Imię i Nazwisko w jednym wierszu */}
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
            color={"themePrimary.0"}
          />
          <Button type="submit" fullWidth mt="xl" size="md" radius={20} color={"themePrimary.0"}>
            Złóż zamówienie
          </Button>
        </Box>
      </form>
      <OrderSummary offer={offer} />
    </Flex>
  );
};
