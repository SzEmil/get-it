'use server';

import prisma from '../../prisma/client';
import * as DB from '@prisma/client';
import { FormatResponse } from './response';
import { CartItem } from '@/types/types';

export const findCoursesByCourseIds = FormatResponse(
  async (courseItems: CartItem[]) => {
    const courseIds = courseItems.map(({ courseId }) => courseId);

    return prisma.course.findMany({
      where: { courseId: { in: courseIds } },
    });
  }
);
