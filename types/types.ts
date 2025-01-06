import { Customer } from '@/stores/order/order.types';
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
  customer: Customer;
  userId: number;

  invoice_name?: String;
  invoice_address?: String;
  invoice_postal_code?: String;
  invoice_town?: String;
  invoice_country?: String;
  invoice_nip?: String;
  invoice_type?: DB.InvoiceType;

  couponCode: string | null;
};
export type Lesson = {
  id: number;
  title: string;
  about: { title: string; description: string | string[]; image: string }[];
  videoLink: { link: string; name: string }[];
};
export type CourseType = { lessons: Lesson[] } & Omit<DB.Course, 'lessons'>;
