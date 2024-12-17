import * as DB from "@prisma/client";

export type Customer = {
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;

  invoice_name?: string;
  invoice_address?: string;
  invoice_postal_code?: string;
  invoice_town?: string;
  invoice_country?: string;
  invoice_nip?: string;
};

type OrderStoreData = {
  customer: Customer;
  paymentInProgress: boolean;
  areTermsAccepted: boolean;
};

type OrderStoreActions = {
  setCustomer: (customerData: Customer) => void;
  setPaymentInProgress: (paymentState: boolean) => void;
  setAcceptTerms: () => void;
};

export type State = OrderStoreData & OrderStoreActions;
