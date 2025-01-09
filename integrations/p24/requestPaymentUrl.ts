import Decimal from 'decimal.js-light';
import { Country, Currency, Encoding, Language, PaymentClient } from './client';
import { Order, OrderInput } from './types';
import { nanoid } from 'nanoid';
import { Endpoints } from '@/constants/endpoints';
import prisma from '@/prisma/client';
import { P24 } from '@ingameltd/node-przelewy24';

export const requestPaymentUrl = async ({
  id,
  email,
  coursesOffer,
}: OrderInput) => {
  const sessionId = nanoid();

  const p24 = new P24(
    +process.env.PAYMENT_MERCHANT_ID!,
    +process.env.PAYMENT_POS_ID!,
    "05e8526b7ba646c77fe28fede51a0c4f",
    "3bd6f66a1948a008",

    {
      sandbox: false, // enable or disable sandbox
    }
  );

  const result = await p24.testAccess();
  console.log(result);

  const payment = await prisma.payment.findFirst({ where: { id } });

  if (!payment) {
    throw new Error('Payment not found');
  }

  const appUrl = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;
  const urlReturn = `${
    process.env.VERCEL ? appUrl : process.env.APP_URL
  }/profile`;
  const urlStatus = `${process.env.VERCEL ? appUrl : process.env.APP_URL}${
    Endpoints.p24Integration
  }`;

  const amount = payment.amount * 100;

  const order: Order = {
    sessionId,
    amount: +amount,
    currency: Currency.PLN,
    description: `Zamówienie numer ${id}`,
    email,
    country: Country.Poland,
    language: Language.PL,
    urlReturn,
    urlStatus,
    timeLimit: 15,
    encoding: Encoding.UTF8,
    waitForResult: true,
    regulationAccept: false,
  };

    const paymentClient = PaymentClient.getInstance();

    const { link } = await paymentClient.createTransaction(order);
    return { paymentUrl: link, sessionId };
  
};
