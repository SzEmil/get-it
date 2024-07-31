'use server';

import { PaymentStatus } from '@prisma/client';
import { PaymentClient } from './client';
import { updatePaymentStatus } from '@/lib/actions/payment';
import { CHECK_PAYMENT_STATUS_INTERVALS } from '@/constants';

export const checkPaymentStatus = async (sessionId: string) => {
  for (const interval of CHECK_PAYMENT_STATUS_INTERVALS) {
    await new Promise(resolve => setTimeout(resolve, interval * 60 * 1000));

    const { status } = await PaymentClient.getPaymentSessionStatus(sessionId);
    if (!status) return;
    if (status === PaymentStatus.SUCCESS) {
      return;
    } else {
      if (
        interval ===
        CHECK_PAYMENT_STATUS_INTERVALS[
          CHECK_PAYMENT_STATUS_INTERVALS.length - 1
        ]
      ) {
        await updatePaymentStatus(sessionId, PaymentStatus.FAILED);
      } else {
        await updatePaymentStatus(sessionId, status);
      }
    }
  }
};

export const formatPaymentSessionStatus = (statusCode: number) => {
  switch (statusCode) {
    case 0:
      return PaymentStatus.NO_PAYMENT;
    case 1:
      return PaymentStatus.ADVANCE_PAYMENT;
    case 2:
      return PaymentStatus.SUCCESS;
    case 3:
      return PaymentStatus.PAYMENT_RETURNED;
    default:
      return PaymentStatus.AWAITING;
  }
};
