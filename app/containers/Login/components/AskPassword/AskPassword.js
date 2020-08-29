import React, { useCallback } from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';
import { FORGETPassBtn } from './components';

import {
  LoginWrapper,
  LoginBox,
  LoginButtonsGroup,
  ErrorContainer,
  WrapperBack,
} from './styles';

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

  const handleFORGETBtnClick = useCallback(() => {
    actions.handleForgetPasswordLogin(mobile);
  }, [mobile]);

  const handleBackBtnClick = useCallback(() => {
    actions.handleBackBtns[authFlowStep]();
  }, [authFlowStep]);

  return (
    <LoginWrapper>
      <WrapperBack>
        <Button
          type={ButtonTypes.TEXT_ONLY}
          label={<FormattedMessage {...messages.backWard} />}
          onClick={handleBackBtnClick}
        />
      </WrapperBack>

      <Form {...formProps}>
        <LoginBox>
          <InputField
            readOnly
            type="text"
            name="phoneNumber"
            // icon={'fas fa-phone'}
            placeholder={mobile}
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
          {error && <ErrorContainer>{error}</ErrorContainer>}
        </LoginBox>
        <LoginButtonsGroup>
          <FORGETPassBtn handleFORGETBtnClick={handleFORGETBtnClick} />
          <Button
            type={ButtonTypes.FILLED}
            label={<FormattedMessage {...messages.submitLogin} />}
            typeAttr="submit"
          />

          {/* {loading && <span>در حال پردازش</span>} */}
        </LoginButtonsGroup>
      </Form>
    </LoginWrapper>
  );
};

export default AskPassword;
