import Decimal from 'decimal.js-light';
import { Country, Currency, Encoding, Language, PaymentClient } from './client';
import { Order, OrderInput } from './types';
import { nanoid } from 'nanoid';
import { Endpoints } from '@/constants/endpoints';

export const requestPaymentUrl = async ({
  id,
  email,
  coursesOffer,
}: OrderInput) => {
  const sessionId = nanoid();

  const orderValue = coursesOffer.reduce(
    (acc, { price }) => acc.plus(price!),
    new Decimal(0)
  );
  const amount = orderValue.mul(100).toNumber();

  const appUrl = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;
  const urlReturn = `${
    process.env.VERCEL ? appUrl : process.env.APP_URL
  }/profile`;
  const urlStatus = `${process.env.VERCEL ? appUrl : process.env.APP_URL}${
    Endpoints.p24Integration
  }`;
  console.log(urlStatus);
  const order: Order = {
    sessionId,
    amount,
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
