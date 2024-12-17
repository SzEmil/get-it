'use client';

import useStore from '@/stores/store';
import { useOrderStore } from '../stores/order/order.store';
import { useForm } from '@mantine/form';

type ValidateData = {
  [fieldName: string]: (value: any) => string | null;
};

export const useOrderForm = (lang: string, isCompanyInvoice: boolean) => {
  const initialData = useStore(useOrderStore, state => state.customer);

  const validateData: ValidateData = {
    email: value => (/^\S+@\S+$/.test(value) ? null : 'Niepoprawny email'),
    firstName: value => (value.length === 0 ? 'Imię jest wymagane' : null),
    lastName: value => (value.length === 0 ? 'Nazwisko jest wymagane' : null),
    address: value => (value.length === 0 ? 'Adres jest wymagany' : null),
    country: value => (value.length === 0 ? 'Kraj jest wymagany' : null),
    city: value => (value.length === 0 ? 'Miasto jest wymagane' : null),
    postalCode: value =>
      value.length === 0 ? 'Kod pocztowy jest wymagany' : null,
    phone: value =>
      value.length === 0
        ? 'Numer telefonu jest wymagany'
        : /^[0-9\-\+\. ]+$/.test(value)
        ? null
        : 'Niepoprawny numer telefonu',
    acceptedTerms: value =>
      value === true ? null : 'Musisz zaakceptować regulamin',

    // Dynamiczna walidacja pól fakturowych
    invoice_name: value =>
      isCompanyInvoice && value.length === 0 ? 'Nazwa firmy jest wymagana' : null,
    invoice_address: value =>
      isCompanyInvoice && value.length === 0 ? 'Adres faktury jest wymagany' : null,
    invoice_postal_code: value =>
      isCompanyInvoice && value.length === 0
        ? 'Kod pocztowy faktury jest wymagany'
        : null,
    invoice_town: value =>
      isCompanyInvoice && value.length === 0 ? 'Miasto faktury jest wymagane' : null,
    invoice_country: value =>
      isCompanyInvoice && value.length === 0 ? 'Kraj faktury jest wymagany' : null,
    invoice_nip: value =>
      isCompanyInvoice && value.length === 0 ? 'NIP jest wymagany' : null,
  };

  return useForm({
    initialValues: initialData,
    validate: validateData,
  });
};