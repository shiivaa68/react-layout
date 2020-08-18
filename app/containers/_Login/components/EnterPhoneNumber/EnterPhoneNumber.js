import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';
import { OTPLoginBtn } from './components';
import { phoneNumberRegex } from 'utils/regexUtils';

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

  const handleOTPBtnClick = values => {
    if (phoneNumberRegex.test(values.phoneNumber))
      actions.handleOTPLogin(values);
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
            <OTPLoginBtn handleOTPBtnClick={handleOTPBtnClick} />
            <Button
              id="second_button"
              type={ButtonTypes.FILLED}
              label={<FormattedMessage {...messages.login_register} />}
              typeAttr="submit"
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
