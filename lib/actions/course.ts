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

export const findUserCourses = FormatResponse(async (userId: number) => {
  const userCourses = await prisma.course.findMany({
    where: {
      users: {
        some: {
          id: userId,
        },
      },
    },
  });

  return userCourses;
});

export const findUserCourseById = FormatResponse(
  async ({ userId, courseId }: { userId: number; courseId: number }) => {
    const userCourse = await prisma.course.findFirst({
      where: {
        id: courseId,
        users: {
          some: {
            id: userId,
          },
        },
      },
    });

    return userCourse;
  }
);
