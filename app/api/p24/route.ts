import { NextResponse } from 'next/server';

import { errorHandler } from '@/server/errorHandler';
import { PaymentStatus } from '@prisma/client';
import { p24Integration } from '@/integrations/p24/notificationHandler';
import { updatePaymentStatus } from '@/lib/actions/payment';
import { createInvoice } from '@/lib/actions/invoice.actions';
import { createUserProgressFromPayment } from '@/lib/actions/userProgress.actions';

export const POST = errorHandler(
  p24Integration(async (req, res, sessionId, amount, paymentStatus) => {
    console.log(paymentStatus);
    if (paymentStatus === PaymentStatus.SUCCESS) {
      const payment = await updatePaymentStatus(sessionId, paymentStatus);

      if (payment) {
        const invoice = await createInvoice(payment.id);
        await createUserProgressFromPayment(payment.id);
        //send mail to karol i klient
      }
    }
    return NextResponse.json({ message: 'Success' });
  })
);
