import { useCallback } from 'react';
import { initValuesForGetPhoneNum } from './form/initialValues';
import { validationSchemaForGetPhoneNum } from './form/validationSchema';

const LoginManager = () => {
  const handleLoginWithUserPass = useCallback(() => {
    console.log('LOGIN WITH USER PASS');
  }, []);

  const handleLoginWithOTP = useCallback(() => {
    console.log('LOGIN WITH OTP');
  }, []);

  const handleLoginWithAsiaTak = useCallback(() => {
    console.log('LOGIN WITH ASIA TAK');
  }, []);

  return {
    data: {},
    actions: {
      handleLoginWithUserPass,
      handleLoginWithOTP,
      handleLoginWithAsiaTak,
    },
    formProps: {
      initialValues: initValuesForGetPhoneNum,
      validationSchema: validationSchemaForGetPhoneNum,
      onSubmit: e => console.log('FORM SUBMITTED >>>', e),
    },
  };
};

export default LoginManager;
