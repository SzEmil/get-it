import { CartItem, Currency } from "@ingameltd/node-przelewy24";
import { PaymentStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import * as DB from '@prisma/client';

export type {
  Order,
  CartItem,
  NotificationRequest,
  Verification,
} from "@ingameltd/node-przelewy24";

type Product = CartItem;

export type OrderInput = {
  id: number;
  email: string;
  coursesOffer: DB.Offer[];
};

export type OnPaymentSuccessFunction = (
  req: NextRequest,
  res: NextResponse,
  sessionId: string,
  amount: number,
  paymentStatus: PaymentStatus
) => Promise<NextResponse>;

export type OrderBySessionId = {
  data: {
    statement: string;
    orderId: number;
    sessionId: string;
    status: number;
    amount: number;
    currency: Currency;
    date: string;
    dateOfTransaction: string;
    clientEmail: string;
    accountMD5: string;
    paymentMethod: number;
    description: string;
    clientName: string;
    clientAddress: string;
    clientCity: string;
    clientPostcode: string;
    batchId: number;
    fee: string;
  };
  responseCode: number;
};
