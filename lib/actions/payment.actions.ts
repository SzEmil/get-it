'use server';

import { FormatResponse } from './response';
import prisma from '../../prisma/client';

export const findUserPayments = FormatResponse(async (userId: number) => {
  const userPayments = await prisma.payment.findMany({
    where: {
      userId: userId,
    },
    include: { courses: true, invoices: true },
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

export const getPaymentWithOrderCourses = async ({
  paymentId,
  userClerkId,
}: {
  paymentId: number;
  userClerkId: string; // clerkId to string, więc zmieniłem typ
}) => {
  // Pobierz płatność wraz z powiązanym użytkownikiem
  const payment = await prisma.payment.findUnique({
    where: {
      id: paymentId,
    },
    include: {
      courses: true, // Pobierz powiązane zamówienia (OrderCourse)
      user: true,    // Pobierz dane użytkownika, aby sprawdzić clerkId
    },
  });

  // Sprawdź, czy płatność istnieje
  if (!payment) {
    return null; // Zwróć null, jeśli płatność nie istnieje
  }

  // Sprawdź, czy użytkownik ma dostęp do tej płatności
  if (payment.user.clerkId !== userClerkId) {
    return null; // Zwróć null, jeśli użytkownik nie jest właścicielem płatności
  }

  // Zwróć płatność, jeśli wszystko się zgadza
  return payment;
};
