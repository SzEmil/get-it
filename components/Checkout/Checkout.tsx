'use client';

import { useOrderForm } from '@/hooks/useOrderForm';
import { useOrderStore } from '@/stores/order/order.store';
import { Box, Flex, TextInput, Checkbox, Button, Switch } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import * as DB from '@prisma/client';
import { OrderSummary } from './components/OrderSummary';
import css from './Checkout.module.css';
import { Customer } from '@/stores/order/order.types';
import { createOrder } from '@/lib/actions/orderProcessing';
import { OrderData } from '@/types/types';
import { useRouter } from 'next/navigation';
import { notify } from '@/services/Email/notifications';
import { useUser } from '@clerk/nextjs';
import { findUserCourseIds } from '@/lib/actions/course';

type CheckoutProps = {
  lang: string;
  offer: DB.Offer;
  userId: number;
};

const Checkout = ({ lang, offer, userId }: CheckoutProps) => {
  const [isSubmmiting, setIsSubmmiting] = useState(false);

  const router = useRouter();
  const { setCustomer } = useOrderStore();

  // Stan dla wyboru typu faktury
  const [isCompanyInvoice, setIsCompanyInvoice] = useState(false);

  const customerForm = useOrderForm(lang, isCompanyInvoice);
  const [userOwnsCourse, setUserOwnsCourse] = useState(false);
  const [couponCode, setCouponCode] = useState<string | null>(null);

  const { isLoaded, user } = useUser();

  useEffect(() => {
    setCustomer(customerForm.values);
  }, [customerForm.values, setCustomer]);

  useEffect(() => {
    const checkUserCourses = async () => {
      if (!isLoaded || !user) return;

      // @ts-expect-error
      const userIdData = +user.publicMetadata.userId;
      const { data: userCourseIds } = await findUserCourseIds(userIdData);

      const userCoursesIdsData = userCourseIds ?? [];

      // Sprawdź, czy użytkownik posiada kurs
      if (userCoursesIdsData.includes(offer.courseId)) {
        setUserOwnsCourse(true); // Ustaw stan, jeśli użytkownik już posiada kurs
      }
    };

    checkUserCourses();
  }, [isLoaded, user, offer.courseId]);

  const onSubmitCheckoutForm = async (values: Customer) => {
    if (!userOwnsCourse) {
      try {
        setIsSubmmiting(true);
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

          invoice_name: isCompanyInvoice
            ? values.invoice_name
            : values.firstName + ' ' + values.lastName,
          invoice_address: isCompanyInvoice
            ? values.invoice_address
            : values.address,
          invoice_postal_code: isCompanyInvoice
            ? values.invoice_postal_code
            : values.postalCode,
          invoice_town: isCompanyInvoice ? values.invoice_town : values.city,
          invoice_country: isCompanyInvoice
            ? values.invoice_country
            : values.country,
          invoice_nip: isCompanyInvoice ? values.invoice_nip : undefined,
          invoice_type: isCompanyInvoice ? 'COMPANY' : 'PERSONAL',

          couponCode,
        };

        // const data = await createOrder(orderData);
        // if (data.data) router.push(data.data?.paymentUrl);
         notify.onErrorMessage('Płatności są obecnie nieaktywne. Przerwa techniczna.');
      } finally {
        setIsSubmmiting(false);
      }
    }
  };

  return (
    <Flex w={'100%'} justify={'space-between'} align={'flex-start'}>
      <form
        onSubmit={customerForm.onSubmit(values => onSubmitCheckoutForm(values))}
        style={{ width: '100%', maxWidth: '700px' }}
      >
        <Box w={'100%'}>
          {/* Dane podstawowe */}
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

          {/* Przełącznik dla faktury */}
          <Switch
            label="Chcę fakturę dla firmy"
            checked={isCompanyInvoice}
            onChange={event => setIsCompanyInvoice(event.currentTarget.checked)}
            mt="lg"
            styles={{
              track: {
                backgroundColor: isCompanyInvoice ? 'themePrimary.0' : '#555',
              },
              thumb: {
                backgroundColor: 'white',
                border: '2px solid themePrimary.0',
              },
              label: {
                color: 'white',
              },
            }}
          />

          {/* Pola dla faktury firmowej */}
          {isCompanyInvoice && (
            <>
              <TextInput
                label="Nazwa firmy"
                placeholder="Nazwa firmy"
                {...customerForm.getInputProps('invoice_name')}
                required
                mt="sm"
                classNames={{ input: css.input }}
              />
              <TextInput
                label="Adres faktury"
                placeholder="Adres faktury"
                {...customerForm.getInputProps('invoice_address')}
                required
                mt="sm"
                classNames={{ input: css.input }}
              />
              <Flex gap="md" mt="sm">
                <TextInput
                  label="Kod pocztowy"
                  placeholder="Kod pocztowy"
                  {...customerForm.getInputProps('invoice_postal_code')}
                  required
                  classNames={{ input: css.input }}
                  style={{ flex: 1 }}
                />
                <TextInput
                  label="Miasto"
                  placeholder="Miasto"
                  {...customerForm.getInputProps('invoice_town')}
                  required
                  classNames={{ input: css.input }}
                  style={{ flex: 2 }}
                />
              </Flex>
              <TextInput
                label="Kraj"
                placeholder="Kraj"
                {...customerForm.getInputProps('invoice_country')}
                required
                mt="sm"
                classNames={{ input: css.input }}
              />
              <TextInput
                label="NIP"
                placeholder="NIP"
                {...customerForm.getInputProps('invoice_nip')}
                required
                mt="sm"
                classNames={{ input: css.input }}
              />
            </>
          )}

          {/* Akceptacja regulaminu */}
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

          {/* Przycisk */}
          <Button
            type="submit"
            fullWidth
            mt="xl"
            size="md"
            radius={20}
            color={'themePrimary.0'}
            disabled={isSubmmiting || userOwnsCourse}
          >
            {isSubmmiting ? 'Ładowanie' : 'Złóż zamówienie'}
          </Button>
        </Box>
      </form>
      <OrderSummary offer={offer} setCouponCode={setCouponCode} />
    </Flex>
  );
};

export default Checkout;
