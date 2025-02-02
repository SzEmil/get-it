'use server';

import { OrderData } from '../../types/types';
import { requestPaymentUrl } from '../../integrations/p24';
import { checkPaymentStatus } from '../../integrations/p24/PaymentSessionStatus';
import { savePayment, updatePaymentData } from './payment';
import { FormatResponse } from './response';
import { findOfferCoursesByCourseIds } from './offer';
import * as DB from '@prisma/client';
import { Customer } from '@/stores/order/order.types';
import { getUserById } from './user.actions';

export type UserOrderDataType = {
  invoice_name?: String;
  invoice_address?: String;
  invoice_postal_code?: String;
  invoice_town?: String;
  invoice_country?: String;
  invoice_nip?: String;
  invoice_type?: DB.InvoiceType;
} & Customer &
  Pick<DB.User, 'id'>;

export const createOrder = FormatResponse(
  async ({ courses, customer, userId, couponCode }: OrderData) => {
    // Success scenario
    const user = await getUserById(userId);

    if (!user) {
      throw new Error(`User with id: ${userId} not found`);
    }

    const customerData = {
      ...customer,
      id: user.id,
    } satisfies UserOrderDataType;

    const orderDb = await savePayment(customerData, courses, couponCode);

    const { data: coursesData } = await findOfferCoursesByCourseIds(courses);
    if (orderDb && coursesData) {
      const { paymentUrl, sessionId } = await requestPaymentUrl({
        id: orderDb.id,
        email: orderDb.email,
        coursesOffer: coursesData,
      });
      await updatePaymentData(orderDb.id, sessionId);

      checkPaymentStatus(sessionId);
      return { paymentUrl, sessionId };
    }
  }
);
