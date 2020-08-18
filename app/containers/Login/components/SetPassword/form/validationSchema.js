import * as Yup from 'yup';
import { passwordRegex } from 'utils/regexUtils';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .matches(passwordRegex, 'پسوردباید بین 6 تا 16 کاراکتر باشد که شامل یک کاراکتر بزرگ کوچک و حداقل یک عدد باشد')
    .required('فیلد ورودی خالی می باشد')
    .min(2, 'پسورد خیلی کوتاه می باشد.'),
    confirmPassword: Yup.string()
    .required('فیلد ورودی خالی می باشد')
    .test('تکرار پسورد', 'پسورد یکسان نسیت', function(value) {
      return this.parent.password === value;
    }),


});

export default validationSchema;