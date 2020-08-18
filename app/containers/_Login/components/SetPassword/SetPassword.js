import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';

import { PasswordFormWrapper, LoginBox, LoginButtonsGroup } from './styles';

const SetPassword = () => {
  const {
    data: { error, loading, authFlowStep, mobile, confirmationCode },
    actions,
  } = useLoginContext();

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: actions[authFlowStep],
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

            {loading && <span>در حال پردازش</span>}
            {error && <span>{error}</span>}
          </LoginButtonsGroup>
        </LoginBox>
      </Form>
    </PasswordFormWrapper>
  );
};

export default SetPassword;