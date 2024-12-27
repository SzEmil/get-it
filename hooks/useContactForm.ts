import { useForm } from '@mantine/form';

type ValidateData = {
  [fieldName: string]: (value: any) => string | null;
};

export type ContactFormInitialData = {
  email: string;
  topic: string;
  message: string;
  error?: any;
};

export const useContactForm = (lang: string, userEmail?: string) => {
  const initialData: ContactFormInitialData = {
    email: userEmail ?? '',
    topic: '',
    message: '',
    error: null,
  };

  const validateData: ValidateData = {
    email: value =>
      /^\S+@\S+$/.test(value) ? null : 'Proszę podać adres email',
    topic: value => (value.length === 0 ? 'Temat jest wymagany' : null),
    message: value => (value.length === 0 ? 'Wiadomośc jest wymagana' : null),
  };

  return useForm({
    initialValues: initialData,
    validate: validateData,
  });
};
