import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  discount_code: Yup.string()
    // .matches(phoneNumberRegex, 'شماره نامعتبر است')
    // .required('فیلد ورودی خالی می باشد'),
});

export default validationSchema;
