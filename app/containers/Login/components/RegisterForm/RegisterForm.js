import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { RegisterFormWrapper, RegisterBox } from './styles';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';

const RegisterForm = () => {
  const {
    data: { mobile, loading_register_one },
    errors: { error_register_one },
    actions: { handleRegistrationSubmit, handleConfiramtionCode },
  } = useLoginContext();

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: handleConfiramtionCode,
  };

  return (
    <RegisterFormWrapper>
      <Form {...formProps}>
        <RegisterBox>
          <p>{`رمز یکبار مصرف وارد شده به شماره ${mobile} وارد کنید‍`}</p>

          <InputField
            type="text"
            name="code"
            autoComplete="off"
            icon={'fas fa-phone'}
            placeholder="کد تایید یکبار مصرف را وارد نمایید"
            label={<FormattedMessage {...messages.mobile} />}
          />

          <Button
            type={ButtonTypes.FILLED}
            label={<FormattedMessage {...messages.checkCode} />}
            typeAttr="submit"
          />
        </RegisterBox>
      </Form>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
