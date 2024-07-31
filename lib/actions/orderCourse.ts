import { PaymentStatus, Prisma } from '@prisma/client';
import prisma from '../../prisma/client';
import { CartItem } from '@/types/types';

export const createOrderCourse = async (
  paymentId: number,
  courses: CartItem[]
) => {
  const orderCoursesToCreate = courses.map(course => ({
    paymentId,
    courseId: course.courseId,
    courseName: course.courseName,
  }));
  await prisma.orderCourse.createMany({
    data: [...orderCoursesToCreate],
  });
};
