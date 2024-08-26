import { ContentSchema } from '../../schema';

export const polish: ContentSchema = {
  header: {
    nav: {
      home: 'Start',
    },
  },
  checkout: {
    title: "Składanie Zamówienia",
    form: {
      contactInformation: {
        title: "Informacje kontaktowe",
        email: {
          label: "Email",
          placeholder: "janKowalski@example.com",
          error: "Niepoprawny email",
        },
      },
      shippingAddress: {
        title: "Adres dostawy",
        country: {
          label: "Kraj",
          placeholder: "W tym momencie dostawa możliwa jest tylko na terenie Polski",
          error: "Kraj jest wymagany",
        },
        firstName: {
          label: "Imię",
          placeholder: "Jan",
          error: "Imię jest wymagane",
        },
        lastName: {
          label: "Nazwisko",
          placeholder: "Kowalski",
          error: "Nazwisko jest wymagane",
        },
        address: {
          label: "Adres",
          placeholder: "ulica numer domu/lokalu",
          error: "Adres jest wymagany",
        },
        city: {
          label: "Miasto",
          placeholder: "Warszawa",
          error: "Miasto jest wymagane",
        },
        postalCode: {
          label: "Kod pocztowy",
          placeholder: "00-000",
          error: "Kod pocztowy jest wymagany",
        },
        phone: {
          label: "Telefon",
          placeholder: "+00 000-000-000",
          error: {
            numberRequired: "Numer telefony jest wymagany",
            invalidNumber: "Niepoprawny numer telefonu",
          },
        },
      },
    },
    navigateBtns: {
      returnBtn: "Koszyk",
      continueBtn: "Kontynuuj",
    },
  },
};
