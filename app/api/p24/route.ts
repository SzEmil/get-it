import { NextResponse } from 'next/server';

import { errorHandler } from '@/server/errorHandler';
import { PaymentStatus } from '@prisma/client';
import { p24Integration } from '@/integrations/p24/notificationHandler';
import { updatePaymentStatus } from '@/lib/actions/payment';

export const POST = errorHandler(
  p24Integration(async (req, res, sessionId, amount, paymentStatus) => {
    console.log(paymentStatus);
    if (paymentStatus === PaymentStatus.SUCCESS) {
      const result = await updatePaymentStatus(sessionId, paymentStatus);
    }
    return NextResponse.json({ message: 'Success' });
  })
);
