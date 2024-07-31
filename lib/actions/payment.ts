import { PaymentStatus, Prisma } from '@prisma/client';
import prisma from '../../prisma/client';
import * as DB from '@prisma/client';
import {  createOrderCourse } from './orderCourse';
import { CartItem } from '@/types/types';

export const savePayment = async (
  customer: DB.User,
  courses: CartItem[]
) => {
  const payment = await prisma.payment.create({
    data: {
      // TODO address
      city: customer.city,
      email: customer.email,
      firstName: customer.firstName,
      houseNumber: customer.houseNumber ?? null,
      lastName: customer.lastName,
      phone: customer.phone,
      postalCode: customer.postalCode,
      street: customer.street,
      flatNumber: customer.flatNumber ?? null,
      userId: customer.id,
    },
  });

  await createOrderCourse(payment.id, courses);

  return payment;
};

export const updatePaymentStatus = async (
  sessionId: string,
  status: PaymentStatus,
) => {
  const payment = await prisma.payment.findFirst({
    where: { paymentSessionId: sessionId },
  });
  if (payment) {
    await Promise.all([updatePayment(payment.id, { paymentStatus: status })]);
    const updatedPayment = await prisma.payment.findUnique({
      where: { id: payment.id },
    });
    return updatedPayment;
  }
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
