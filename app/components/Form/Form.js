import React from 'react';
import PropTypes from 'prop-types';
import { Form as FormikForm, Formik } from 'formik';

const useForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  enableReinitialize,
  ...formProps
}) => ({
  formikProps: {
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize,
  },
  formProps,
});

const Form = props => {
  const { formikProps, formProps } = useForm(props);

  return (
    <Formik {...formikProps}>
      <FormikForm {...formProps} />
    </Formik>
  );
};

Form.propTypes = {
  enableReinitialize: PropTypes.bool,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object,
  children: PropTypes.node,

  onSubmit: PropTypes.func,
};

export default Form;