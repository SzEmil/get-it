'use client';

import { getCouponDetails } from '@/lib/actions/coupon.actions';
import { notify } from '@/services/Email/notifications';
import { Box, Button, Group, Text, TextInput } from '@mantine/core';
import { Coupon } from '@prisma/client';
import React, { useState } from 'react';

type PriceProps = {
  price: number;
  currency: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Price = ({ price, currency, setCouponCode }: PriceProps) => {
  const [foundCoupon, setFoundCoupon] = useState<Coupon | null>(null);

  const [couponInput, setCouponInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckCoupon = async () => {
    setLoading(true); // Ustawiamy `loading` na true przed rozpoczęciem akcji
    try {
      const { data: coupon } = await getCouponDetails(couponInput);

      if (coupon) {
        setFoundCoupon(coupon);
        setCouponCode(coupon.code);
      } else {
        notify.onErrorMessage('Kupon nieaktywny lub nie istnieje');
      }
    } catch (error) {
      notify.onErrorMessage('Wystąpił błąd podczas sprawdzania kuponu');
    } finally {
      setLoading(false); // Ustawiamy `loading` na false po zakończeniu akcji
    }
  };

  const discountedPrice = foundCoupon
    ? price - (price * foundCoupon.percentage) / 100
    : price;

  return (
    <Box mt={20}>
      {/* Sekcja wpisywania kuponu i przycisk */}
      <Group align="center">
        <TextInput
          placeholder="Wpisz kod kuponu:"
          value={couponInput}
          onChange={event => setCouponInput(event.currentTarget.value)}
        />
        <Button disabled={loading} onClick={handleCheckCoupon}>
          Sprawdź kupon
        </Button>
      </Group>

      {/* Sekcja wyświetlania cen */}
      <Box mt="md">
        <Text size="sm">
          Cena przed obniżką: <strong>{price}</strong> {currency}
        </Text>
        {foundCoupon && (
          <Text size="sm" color="green">
            Cena po obniżce: <strong>{discountedPrice.toFixed(2)}</strong>{' '}
            {currency} (zniżka {Math.round(foundCoupon?.percentage ?? 0)}%)
          </Text>
        )}
      </Box>
    </Box>
  );
};
