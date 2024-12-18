'use server';

import { FormatResponse } from './response';
import prisma from '../../prisma/client';

export const findUserPayments = FormatResponse(async (userId: number) => {
  const userPayments = await prisma.payment.findMany({
    where: {
      userId: userId,
    },
    include: { courses: true },
  });

  return userPayments;
});

export const findPaymentById = FormatResponse(async (paymentId: number) => {
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
  });

  if (!payment) {
    throw new Error(`Payment with ID ${paymentId} not found`);
  }

  return payment;
});