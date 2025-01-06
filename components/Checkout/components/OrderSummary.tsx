'use client';
import { Box, Text, Image, List, ThemeIcon } from '@mantine/core';
import React from 'react';
import * as DB from '@prisma/client';
import { Price } from './Price';

type OrderSummaryProps = {
  offer: DB.Offer;
  setCouponCode: React.Dispatch<React.SetStateAction<string | null>>;
};

export const OrderSummary = ({ offer, setCouponCode }: OrderSummaryProps) => {
  return (
    <Box
      style={theme => ({
        maxWidth: '500px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: theme.radius.md,
        border: `1px solid ${theme.colors.gray[4]}`,
        padding: theme.spacing.md,
        color: theme.white,
      })}
    >
      <Text size="xl" fw={700} mb="md">
        {offer.name}
      </Text>

      <Text size="sm" mb="md">
        {offer.description}
      </Text>

      <Box mt="md">
        <Text size="sm" color="gray.4">
          Język: {offer.language.toUpperCase()}
        </Text>
        <Text size="lg" fw={500}>
          Cena: {offer.price} {offer.currency}
        </Text>
        <Price
          price={offer.price}
          currency={offer.currency}
          setCouponCode={setCouponCode}
        />
      </Box>
    </Box>
  );
};
