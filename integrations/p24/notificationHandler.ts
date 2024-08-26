import {
  NotificationRequest,
  OnPaymentSuccessFunction,
  Verification,
} from './types';
import { NextRequest, NextResponse } from 'next/server';
import { verifyNotification, verifyPayment } from './verification';
import { PaymentClient } from './client';

export const p24Integration =
  (onPaymentSuccess: OnPaymentSuccessFunction) =>
  async (req: NextRequest, res: NextResponse) => {
    const body: NotificationRequest = await req.json();
    const isNotificationValid = await verifyNotification(body);

    if (isNotificationValid) {
      const verifyRequest: Verification = {
        amount: body.amount,
        currency: body.currency,
        orderId: body.orderId,
        sessionId: body.sessionId,
      };

      const isPaymentValid = await verifyPayment(verifyRequest);

      if (isPaymentValid) {
        const { status: paymentStatus } =
          await PaymentClient.getPaymentSessionStatus(body.sessionId);
        return onPaymentSuccess(
          req,
          res,
          body.sessionId,
          body.amount / 100,
          paymentStatus
        );
      }
    }
  };
