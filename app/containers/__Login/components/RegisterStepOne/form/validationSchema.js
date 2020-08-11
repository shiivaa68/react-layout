import * as Yup from 'yup';
import { phoneNumberRegex } from 'utils/regexUtils';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(phoneNumberRegex, 'شماره نامعتبر است')
    .required('فیلد ورودی خالی می باشد'),
});

export default validationSchema;