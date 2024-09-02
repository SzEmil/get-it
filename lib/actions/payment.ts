import { PaymentStatus, Prisma } from '@prisma/client';
import prisma from '../../prisma/client';
import * as DB from '@prisma/client';
import { createOrderCourse } from './orderCourse';
import { CartItem } from '@/types/types';
import { UserOrderDataType } from './orderProcessing';
import { revalidatePath } from 'next/cache';
import { Routes } from '@/constants/endpoints';
import { FormatResponse } from './response';


export const savePayment = async (
  customer: UserOrderDataType,
  courses: CartItem[]
) => {
  const totalAmount = courses.reduce(
    (totalAmount, course) => totalAmount + course.amount,
    0
  );
  const payment = await prisma.payment.create({
    data: {
      // TODO address
      city: customer.city ?? '',
      email: customer.email,
      firstName: customer.firstName,
      houseNumber: customer.houseNumber ?? '',
      lastName: customer.lastName,
      phone: customer.phone ?? '',
      postalCode: customer.postalCode ?? '',
      street: customer.street ?? '',
      flatNumber: customer.flatNumber ?? '',
      userId: customer.id,
      amount: totalAmount,
      currency: 'PLN',
    },
  });

  await createOrderCourse(payment.id, courses);

  return payment;
};

export const updatePaymentStatus = async (
  sessionId: string,
  status: PaymentStatus
) => {
  const payment = await prisma.payment.findFirst({
    where: { paymentSessionId: sessionId },
    include: { courses: true },
  });
  if (payment) {
    await prisma.payment.update({
      where: { id: payment.id },
      data: { paymentStatus: status },
    });

    if (status === PaymentStatus.SUCCESS) {
      // Przypisanie kursów do użytkownika
      if (status === PaymentStatus.SUCCESS) {
        await prisma.user.update({
          where: { id: payment.userId },
          data: {
            courses: {
              connect: payment.courses.map(course => ({ id: course.courseId })),
            },
          },
        });

        const updatedPayment = await prisma.payment.findUnique({
          where: { id: payment.id },
        });

        //dodać tutaj do usera kurs. czyli z apyment pobraćwszystkie orderCurse

        revalidatePath(Routes.offer, 'page');

        return updatedPayment;
      }
    }
  }
  return null;
};

export const updatePaymentData = (id: number, paymentSessionId: string) =>
  prisma.payment.update({
    where: { id },
    data: {
      paymentSessionId,
    },
  });

export const updatePayment = async (
  orderId: number,
  updatedPaymentData: Prisma.PaymentUpdateInput
) => {
  return prisma.payment.update({
    where: {
      id: orderId,
    },
    data: updatedPaymentData,
  });
};

