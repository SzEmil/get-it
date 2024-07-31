import { PaymentClient } from "./client";
import { NotificationRequest, Verification } from "./types";

export const verifyNotification = async (notification: NotificationRequest) => {
  const paymentClient = PaymentClient.getInstance();

  return paymentClient.verifyNotification(notification);
};

export const verifyPayment = async (verifyRequest: Verification) => {
  const paymentClient = PaymentClient.getInstance();

  return await paymentClient.verifyTransaction(verifyRequest);
};