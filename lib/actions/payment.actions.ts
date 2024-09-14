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