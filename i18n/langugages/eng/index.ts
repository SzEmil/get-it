import { ContentSchema } from '../../schema';

export const english: ContentSchema = {
  header: {
    nav: {
      home: 'Home',
    },
  },
  checkout: {
    title: 'Checkout',
    form: {
      contactInformation: {
        title: 'Contact information',
        email: {
          label: 'Email',
          placeholder: 'johnDoe@example.com',
          error: 'Invalid email',
        },
      },
      shippingAddress: {
        title: 'Shipping address',
        country: {
          label: 'Country',
          placeholder: 'At this time, shipping is only available to Poland',
          error: 'Country is required',
        },
        firstName: {
          label: 'First name',
          placeholder: 'John',
          error: 'First name is required',
        },
        lastName: {
          label: 'Last name',
          placeholder: 'Doe',
          error: 'Last name is required',
        },
        address: {
          label: 'Address',
          placeholder: 'street name houseNumber/flatNumber',
          error: 'Address is required',
        },
        city: {
          label: 'City',
          placeholder: 'New York',
          error: 'City is required',
        },
        postalCode: {
          label: 'Postal code',
          placeholder: '00-000',
          error: 'Postal code is required',
        },
        phone: {
          label: 'Phone',
          placeholder: '+00 000-000-000',
          error: {
            numberRequired: 'Phone number is required',
            invalidNumber: 'Invalid phone number',
          },
        },
      },
    },
    navigateBtns: {
      returnBtn: 'Return to cart',
      continueBtn: 'Continue',
    },
  },
};
