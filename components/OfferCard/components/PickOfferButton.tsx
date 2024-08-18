'use client';

import React from 'react';
import styles from '../OfferCard.module.css';
import { Button } from '@mantine/core';
import * as DB from '@prisma/client';
import Link from 'next/link';

type PickOfferButtonProps = {
  lang: string;
  offer: DB.Offer;
};

export const PickOfferButton = ({ lang, offer }: PickOfferButtonProps) => {
  return (
    <Button
      className={styles.btnBuy}
      href={`/offer/${offer.id}/checkout`}
      color="grayscaleWhite.0"
      size="lg"
      fw={500}
      component={Link}
    >
      Kup teraz
    </Button>
  );
};
