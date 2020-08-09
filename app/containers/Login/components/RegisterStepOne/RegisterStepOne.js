import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';
import {
  RegisterStepOneWrapper,
  LoginBox,
  LoginButtonsGroup,
  ForgetPass,
} from './styles';

const RegisterStepOne = () => {
  const {
    data: { loading_register_one },
    errors: { error_register_one },
    actions: { handleRegisterStepOneSubmittion },
  } = useLoginContext();

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: handleRegisterStepOneSubmittion,
  };

  return (
    <RegisterStepOneWrapper>
      <Form {...formProps}>
        <LoginBox>
          <InputField
            type="text"
            name="phoneNumber"
            icon={'fas fa-phone'}
            placeholder="09*********"
            autoComplete="off"
            label={<FormattedMessage {...messages.mobile} />}
          />
          <LoginButtonsGroup>
            <Button
              type={ButtonTypes.FILLED}
              label={<FormattedMessage {...messages.login_register} />}
              typeAttr="submit"
            />

            {error_register_one && <span>{error_register_one}</span>}
            {loading_register_one && <span>در حال پردازش</span>}

            <ForgetPass to="/">
              <FormattedMessage {...messages.forgetPassword} />
            </ForgetPass>
          </LoginButtonsGroup>
        </LoginBox>
      </Form>
    </RegisterStepOneWrapper>
  );
};

export default RegisterStepOne;
