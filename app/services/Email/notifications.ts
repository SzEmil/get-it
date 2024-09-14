import { notifications } from '@mantine/notifications';

export const notify = {
  onErrorOrderProcessing: () =>
    notifications.show({
      title: 'Coś poszło nie tak',
      message:
        'Podczas tworzenia zamówienia wystąpił problem. Skontaktuj się z z pomocą techniczną w celu uzyskania infromacji',
      color: 'red',
      autoClose: 4000,
    }),

  onCustomerEmailSend: () =>
    notifications.show({
      title: 'Email wysłany pomyślnie',
      message: 'Email wysłany pomyślnie',
      color: 'green',
      autoClose: 4000,
    }),

  onEmailSendError: () =>
    notifications.show({
      title: 'Coś poszło nie tak',
      message:
        'Podczas wysyłania wiadomości wystąpił problem. Skontaktuj się z z pomocą techniczną w celu uzyskania infromacji',
      color: 'red',
      autoClose: 4000,
    }),
};
