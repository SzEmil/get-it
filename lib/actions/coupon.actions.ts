'use server';

import prisma from '../../prisma/client';
import * as DB from '@prisma/client';
import { FormatResponse } from './response';
import { CartItem } from '@/types/types';
import { cache } from 'react';

export const getCouponDetails = FormatResponse(async (code: string) => {
  const coupon = await prisma.coupon.findUnique({
    where: { code },
  });

  if (!coupon) {
    throw new Error('Kupon nie istnieje.');
  }

  // Sprawdź, czy kupon jest aktywny i ważny
  if (coupon.expiresAt < new Date()) {
    throw new Error('Kupon wygasł.');
  }

  if (coupon.usedQuantity >= coupon.quantity) {
    throw new Error('Kupon został w pełni wykorzystany.');
  }

  return coupon;
});

export const verifyAndUseCoupon = FormatResponse(
  async ({
    code,
    paymentId,
    userId,
    userDetails,
  }: {
    code: string;
    paymentId: number;
    userId: number;
    userDetails: {
      firstName: string;
      lastName: string;
      email: string;
    };
  }) => {
    // Znajdź kupon
    const coupon = await prisma.coupon.findUnique({
      where: { code },
    });

    if (!coupon) {
      throw new Error('Kupon nie istnieje.');
    }

    // Walidacja kuponu
    if (coupon.expiresAt < new Date()) {
      throw new Error('Kupon wygasł.');
    }

    if (coupon.usedQuantity >= coupon.quantity) {
      throw new Error('Kupon został w pełni wykorzystany.');
    }

    // Użycie kuponu
    await prisma.$transaction(async prisma => {
      // Zaktualizuj dane kuponu
      await prisma.coupon.update({
        where: { id: coupon.id },
        data: {
          usedQuantity: { increment: 1 },
        },
      });

      // Utwórz rekord użycia kuponu
      await prisma.usedCoupon.create({
        data: {
          couponId: coupon.id,
          userId,
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          email: userDetails.email,
          paymentId: paymentId,
          usedFor: { paymentId }, // Dodatkowe dane w JSON
        },
      });
    });

    return {
      success: true,
      message: 'Kupon został pomyślnie wykorzystany.',
    };
  }
);
