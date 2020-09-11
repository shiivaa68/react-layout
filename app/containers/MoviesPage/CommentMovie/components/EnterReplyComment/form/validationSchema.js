import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  comment: Yup.string()
    .required('فیلد ورودی خالی می باشد'),
});

export default validationSchema;
