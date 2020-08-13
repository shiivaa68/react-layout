import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';

import { PasswordFormWrapper, LoginBox, LoginButtonsGroup } from './styles';

const RegisterStepThree = () => {
  const {
    data: { loading_register_three },
    errors: { error_register_three },
    actions: { handleRegisterStepThreeSubmittion },
  } = useLoginContext();

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: handleRegisterStepThreeSubmittion,
  };

  return (
    <PasswordFormWrapper>
      <Form {...formProps}>
        <LoginBox>
          <InputField
            type="password"
            name="password"
            icon={'fa fa-lock'}
            autoComplete="off"
            label={<FormattedMessage {...messages.passwordNew} />}
          />
          <InputField
            type="password"
            name="repassword"
            icon={'fa fa-lock'}
            autoComplete="off"
            label={<FormattedMessage {...messages.passwordRepeat} />}
          />
          <LoginButtonsGroup>
            <Button
              type={ButtonTypes.FILLED}
              label={<FormattedMessage {...messages.submitLogin} />}
              typeAttr="submit"
            />

            {error_register_three && <span>{error_register_three}</span>}
            {loading_register_three && <span>در حال پردازش</span>}
          </LoginButtonsGroup>
        </LoginBox>
      </Form>
    </PasswordFormWrapper>
  );
};

export default RegisterStepThree;
