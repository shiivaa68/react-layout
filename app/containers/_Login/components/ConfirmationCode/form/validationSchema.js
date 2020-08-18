import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  code: Yup.number()
    .max(999999, 'کد تایید باید شش رقمی باشد')
    .min(100000, 'کد تایید باید شش رقمی باشد')
    .required('فیلد ورودی خالی می باشد'),
});

export default validationSchema;