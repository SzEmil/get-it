'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Card,
  Text,
  Group,
  Loader,
  Divider,
  Space,
  Flex,
} from '@mantine/core';
import { FiRefreshCw } from 'react-icons/fi'; // Ikonka odświeżania
import { useRouter } from 'next/navigation';

import { OrderCourse, Payment } from '@prisma/client';
import { useUser } from '@clerk/nextjs';
import { getPaymentWithOrderCourses } from '@/lib/actions/payment.actions';
import { useUserStore } from '@/stores/user/user.store';

type PaymentWithOrder = Payment & {
  courses: OrderCourse[];
};

export const OrderSummaryAfterPayment = ({ id }: { id: string }) => {
  const [paymentData, setPaymentData] = useState<PaymentWithOrder | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { googleAnalytics } = useUserStore();
  const { isLoaded, user } = useUser();

  // Funkcja do pobierania danych płatności
  const fetchPaymentData = useCallback(async () => {
    if (user && isLoaded) {
      setLoading(true);
      setError(null);

      try {
        // @ts-expect-error Typy mogą być ignorowane tutaj
        const userId = +user.publicMetadata.userId;

        // Pobierz dane płatności
        const orderData = await getPaymentWithOrderCourses({
          paymentId: +id, // Zakładam, że `id` to string i musimy go zamienić na liczbę
          userClerkId: user.id, // Używamy Clerk ID użytkownika
        });

        // Zapisz dane płatności w stanie
        setPaymentData(orderData);

        if (
          orderData &&
          orderData.paymentStatus === 'SUCCESS' &&
          googleAnalytics.isEnabled &&
          googleAnalytics.expiriesOn
        ) {

          const today = new Date();
          if (new Date(googleAnalytics.expiriesOn) > today) {
            sendGoogleConversionEvent(orderData);
          }
        }
      } catch (err: any) {
        console.error('Błąd podczas pobierania danych płatności:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  }, [id, user, isLoaded]);

  const sendGoogleConversionEvent = (orderData: PaymentWithOrder) => {

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      console.log('wysłanie tag');
      window.gtag('event', 'conversion', {
        send_to: 'AW-11550321972/ovA8CI6VwYIaELTaz4Mr',
        value: orderData.amount, // Kwota zamówienia
        currency: orderData.currency, // Waluta (np. PLN)
        transaction_id: orderData.paymentSessionId || '', // ID sesji płatności
      });

    } else {
      console.warn('gtag nie jest zainicjalizowany.');
    }
  };

  // Wywołanie fetchPaymentData przy załadowaniu komponentu
  useEffect(() => {
    if (user && isLoaded) {
      fetchPaymentData();
    }
  }, [fetchPaymentData]);

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <Group align="center" mb="md">
        <Flex w={'100%'} justify={'space-between'}>
          {' '}
          <Text fw={600} size="xl" style={{ color: 'white' }}>
            Podsumowanie płatności
          </Text>
          <Button
            variant="outline"
            onClick={fetchPaymentData}
            leftSection={<FiRefreshCw />}
            loading={loading}
            style={{ borderColor: 'white', color: 'white' }}
          >
            Odśwież
          </Button>
        </Flex>
      </Group>

      {loading && <Loader size="md" color="white" />}

      {error && (
        <Text c="red" size="sm" mt="sm">
          {error}
        </Text>
      )}

      {paymentData && (
        <>
          <Divider my="sm" color="white" />
          <Text size="md">
            <strong>Status płatności:</strong> {paymentData.paymentStatus}
          </Text>
          <Text size="md">
            <strong>Kwota:</strong> {paymentData.amount} {paymentData.currency}
          </Text>
          <Text size="md">
            <strong>Kursy:</strong>
          </Text>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {paymentData.courses.map(course => (
              <li key={course.courseId}>
                <Text size="sm" style={{ color: 'white' }}>
                  {course.courseName}
                </Text>
              </li>
            ))}
          </ul>
          <Divider my="sm" color="white" />
          <Space h="md" />
          <Text size="md" style={{ color: 'white' }}>
            Dziękujemy za Twoje zamówienie! Cieszymy się, że wybrałeś kursy w
            ToKnowAI.
          </Text>
          <Space h="sm" />
          <Text size="sm" style={{ color: 'white' }}>
            W razie problemów skontaktuj się z nami:{' '}
            <strong>info@toknowai.pl</strong>
          </Text>
        </>
      )}

      {!loading && !paymentData && !error && (
        <Text size="sm" color="gray" mt="sm">
          Brak danych do wyświetlenia.
        </Text>
      )}
    </Card>
  );
};

export default OrderSummaryAfterPayment;
