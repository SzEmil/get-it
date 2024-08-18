type inputType = { label: string; placeholder: string; error: string };
type inputErrorPhone = {
  error: {
    numberRequired: string;
    invalidNumber: string;
  };
};
type inputPhoneType = Omit<inputType, "error"> & inputErrorPhone;

export type ContentSchema = {
  header: {
    nav: {
      home: string;
    };
  };

  checkout: {
    title: string;
    form: {
      contactInformation: {
        title: string;
        email: inputType;
      };
      shippingAddress: {
        title: string;
        country: inputType;
        firstName: inputType;
        lastName: inputType;
        address: inputType;
        city: inputType;
        postalCode: inputType;
        phone: inputPhoneType;
      };
    };
    navigateBtns: {
      returnBtn: string;
      continueBtn: string;
    };
  };
};
