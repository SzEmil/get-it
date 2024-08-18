'use client';

import { useOrderStore } from '../stores/order/order.store';
import { useForm } from '@mantine/form';

type ValidateData = {
  [fieldName: string]: (value: any) => string | null;
};

export const useOrderForm = (lang: string) => {
  const { customer: initialData } = useOrderStore();

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
        ? 'Numer telefony jest wymagany'
        : /^[0-9\-\+\. ]+$/.test(value)
        ? null
        : 'Niepoprawny numer telefonu',
    acceptedTerms: value =>
      value === true ? null : 'Musisz zaakceptować regulamin',
  };

  return useForm({
    initialValues: initialData,
    validate: validateData,
  });
};
