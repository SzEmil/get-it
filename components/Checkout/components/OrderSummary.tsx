'use client';
import { Box, Text, Image, List, ThemeIcon } from '@mantine/core';
import React from 'react';
import * as DB from '@prisma/client';

type OrderSummaryProps = {
  offer: DB.Offer;
};

export const OrderSummary = ({ offer }: OrderSummaryProps) => {
  return (
    <Box
      style={theme => ({
        maxWidth: "500px",
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
        <Text size="lg" fw={500}>
          Cena: {offer.price} {offer.currency}
        </Text>
        <Text size="sm" color="gray.4">
          Język: {offer.language.toUpperCase()}
        </Text>
      </Box>
    </Box>
  );
};
