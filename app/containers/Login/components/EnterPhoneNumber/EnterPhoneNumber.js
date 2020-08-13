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
  RulesSite,
} from './styles';

const EnterPhoneNumber = () => {
  const {
    data: { loading, error, authFlowStep },
    actions,
  } = useLoginContext();

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: actions[authFlowStep],
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
              id="first_button"
              type={ButtonTypes.TEXT_ONLY}
              label={<FormattedMessage {...messages.otpMessage} />}
              typeAttr="submit"
            />
            <Button
              id="second_button"
              type={ButtonTypes.FILLED}
              label={<FormattedMessage {...messages.login_register} />}
              typeAttr="submit"
              onSubmit={() => {}}
            />
          </LoginButtonsGroup>

          {loading && <span>در حال پردازش</span>}
          {error && <span>{error}</span>}

          <RulesSite to={'/page/rules'}>
            {<FormattedMessage {...messages.rules} />}
          </RulesSite>
        </LoginBox>
      </Form>
    </RegisterStepOneWrapper>
  );
};

export default EnterPhoneNumber;
