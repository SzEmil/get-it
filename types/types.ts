import * as DB from '@prisma/client';

export type I18nProps = {
  lang: string;
};

export type CartItem = {
  courseId: number;
  courseName: string;
  amount: number;
  currency: string;
};

export type OrderData = {
  courses: CartItem[];
  customer: DB.User;
  areTermsAccepted: boolean;
};
