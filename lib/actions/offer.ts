'use server';

import prisma from '../../prisma/client';
import * as DB from '@prisma/client';
import { FormatResponse } from './response';
import { CartItem } from '@/types/types';
import { cache } from 'react';

export const findOfferCoursesByCourseIds = FormatResponse(
  async (courseItems: CartItem[]) => {
    const courseIds = courseItems.map(({ courseId }) => courseId);

    return prisma.offer.findMany({
      where: { courseId: { in: courseIds } },
    });
  }
);

export const findAllOffers = FormatResponse(async () => {
  return prisma.offer.findMany({where: {status: DB.OfferStatus.ACTIVE}});
});

export const findOffersIdsToGenereateParams = cache(async () => {
  return prisma.offer.findMany({ select: { id: true } });
});

export const findOfferById = FormatResponse(async (id: number) => {
  return prisma.offer.findUnique({ where: { id } });
});
