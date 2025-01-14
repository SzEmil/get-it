import { PaymentStatus, Prisma } from '@prisma/client';
import prisma from '../../prisma/client';
import * as DB from '@prisma/client';
import { createOrderCourse } from './orderCourse';
import { CartItem } from '@/types/types';
import { UserOrderDataType } from './orderProcessing';
import { revalidatePath } from 'next/cache';
import { Routes } from '@/constants/endpoints';
import { FormatResponse } from './response';
import { getCouponDetails, verifyAndUseCoupon } from './coupon.actions';

export const savePayment = async (
  customer: UserOrderDataType,
  courses: CartItem[],
  couponCode: string | null
) => {
  const totalAmount = courses
    .reduce(
      (totalAmount, course) =>
        totalAmount + parseFloat(course.amount.toFixed(2)),
      0
    )
    .toFixed(2);

  let discountedAmount = totalAmount; // Domyślnie kwota bez zniżki
  let usedCoupon = false;
  let couponData: DB.Coupon | null = null;

  if (couponCode) {
    const { data: coupon } = await getCouponDetails(couponCode);
    if (coupon) {
      discountedAmount = (
        Number(discountedAmount) -
        (Number(discountedAmount) * coupon.percentage) / 100
      ).toFixed(2);
      usedCoupon = true;
      couponData = coupon;
    }
  }

  const payment = await prisma.payment.create({
    data: {
      city: customer.city ?? '',
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      phone: customer.phone ?? '',
      postalCode: customer.postalCode ?? '',
      userId: customer.id,
      amount: +discountedAmount,
      currency: 'PLN',
      address: customer.address,
      paymentMethod: 'Płatność online',

      invoice_name: customer.invoice_name,
      invoice_address: customer.invoice_address,
      invoice_postal_code: customer.invoice_postal_code,
      invoice_town: customer.invoice_town,
      invoice_country: customer.invoice_country,
      invoice_nip: customer.invoice_nip ?? '',
      invoice_type: customer.invoice_type,
    },
  });

  if (usedCoupon && couponData) {
    await verifyAndUseCoupon({
      code: couponData.code,
      paymentId: payment.id,
      userId: customer.id,
      userDetails: customer,
    });
  }

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

