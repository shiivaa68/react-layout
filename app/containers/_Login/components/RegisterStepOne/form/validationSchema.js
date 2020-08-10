import * as Yup from 'yup';
import { phoneNumberRegex } from 'utils/regexUtils';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(phoneNumberRegex, 'مجاز نیست ')
    .required('اجباری'),
});

export default validationSchema;
