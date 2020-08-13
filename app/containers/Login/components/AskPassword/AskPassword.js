import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';

import { LoginWrapper, LoginBox, LoginButtonsGroup } from './styles';

const AskPassword = () => {
  const {
    data: { loading, error, authFlowStep, mobile },
    actions,
  } = useLoginContext();

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: actions[authFlowStep],
  };

  return (
    <LoginWrapper>
      <Form {...formProps}>
        <LoginBox>
          <InputField
            readOnly
            type="text"
            name="phoneNumber"
            value={mobile}
            icon={'fas fa-phone'}
            placeholder="09*********"
            autoComplete="off"
            label={<FormattedMessage {...messages.mobile} />}
          />
          <InputField
            type="password"
            name="password"
            icon={'fa fa-lock'}
            autoComplete="off"
            label={<FormattedMessage {...messages.password} />}
          />
          <LoginButtonsGroup>
            <Button
              type={ButtonTypes.TEXT_ONLY}
              label={<FormattedMessage {...messages.forgetPassword} />}
              typeAttr="submit"
            />
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
    </LoginWrapper>
  );
};

export default AskPassword;
