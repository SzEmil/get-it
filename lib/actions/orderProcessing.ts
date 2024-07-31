'use server';

import { OrderData } from '../../types/types';
import { requestPaymentUrl } from '../../integrations/p24';
import { checkPaymentStatus } from '../../integrations/p24/PaymentSessionStatus';
import { savePayment, updatePaymentData } from './payment';
import { FormatResponse } from './response';
import { findOfferCoursesByCourseIds } from './offer';

export const createOrder = FormatResponse(
  async ({ courses, customer }: OrderData) => {
    // Success scenario
    const orderDb = await savePayment(customer, courses);

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
