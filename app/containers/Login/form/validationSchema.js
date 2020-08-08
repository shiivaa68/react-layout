import * as Yup from 'yup';

export const validationSchemaForGetPhoneNum = Yup.object({
  phoneNumber: Yup.number().required('this phone number is required!'),
});
