import { P24 } from '@ingameltd/node-przelewy24';
import { OrderBySessionId } from './types';
import { formatPaymentSessionStatus } from './PaymentSessionStatus';
import { getPaymentData } from './getPaymentData';
import { parseBooleanFromEnv } from '@/helpers/enviromentVariables';

export class PaymentClient {
  private static instance: P24;

  private constructor() {}

  public static getInstance(): P24 {

    if (!PaymentClient.instance) {
      PaymentClient.instance = new P24(
        parseInt(process.env.PAYMENT_MERCHANT_ID!),
        parseInt(process.env.PAYMENT_POS_ID!),
        process.env.PAYMENT_API_KEY!,
        process.env.PAYMENT_CRC_KEY!,
        {
          sandbox: parseBooleanFromEnv(process.env.PAYMENT_SANDBOX_MODE),
        }
      );
    }
    return PaymentClient.instance;
  }

  private static async apiClient<T>(url: string, body?: object): Promise<T> {
    return await getPaymentData(url, body);
  }

  public static async getPaymentSessionStatus(sessionId: string) {
    const res = await PaymentClient.apiClient<OrderBySessionId>(
      `transaction/by/sessionId/${sessionId}`
    );
    return {
      status: await formatPaymentSessionStatus(res?.data.status),
    };
  }
}

export {
  Currency,
  Country,
  Language,
  Encoding,
  P24Error,
} from '@ingameltd/node-przelewy24';
