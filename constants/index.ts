export enum ROUTES {
  HOME = '/',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
}
export const CHECK_PAYMENT_STATUS_INTERVALS = [1, 2, 5, 10, 15];

export const CUSTOMER_INITIAL_STATE = {
  email: "",
  country: "",
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  postalCode: "",
  phone: "",
  acceptedTerms: false,

  isCompanyInvoice: false,
  invoice_name: '',
  invoice_address: '',
  invoice_postal_code: '',
  invoice_town: '',
  invoice_country: '',
  invoice_nip: '',
};
