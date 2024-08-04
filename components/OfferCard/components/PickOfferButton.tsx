'use client';

import React from 'react';
import styles from '../OfferCard.module.css';
import { Button } from '@mantine/core';
import * as DB from '@prisma/client';

type PickOfferButtonProps = {
  lang: string;
  offer: DB.Offer;
};

export const PickOfferButton = ({ lang, offer }: PickOfferButtonProps) => {
  const handleOnClickPickCoursToBuy = () => {
    console.log(offer);
  };
  return (
    <Button
      className={styles.btnBuy}
      onClick={() => handleOnClickPickCoursToBuy()}
    >
      Kup teraz
    </Button>
  );
};
