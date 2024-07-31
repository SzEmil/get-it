import * as DB from '@prisma/client';

export type I18nProps = {
    lang: string;
  };
  
  export type CartItem = {
    courseId: number;
    courseName: string;
  };

  export type OrderData = {
    courses: CartItem[];
    customer: DB.User;
    areTermsAccepted: boolean;
  };