import React, { useCallback } from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import messages from '../../messages';
import { RequestAgainCode } from './components';
import ConfirmationCodeManager from './ConfirmationCodeManager';
import {
  RegisterFormWrapper,
  RegisterBox,
  ErrorContainer,
  WrapperBack,
  LoginButtonsGroup,
  WrapperCounter,
  FakeWrap,
} from './styles';

const ConfirmationCode = () => {
  const {
    data: { mobile, error, countDown, authFlowStep },
    actions: { handleResendCodeBtnClick, handleBackBtnClick },
    formProps,
  } = ConfirmationCodeManager();

  // console.log({ mobile });

  // const handleBackBtnClick = useCallback(() => {
  //   actions.handleBackBtns[authFlowStep]();
  // }, [authFlowStep]);

  return (
    <RegisterFormWrapper>
      <Form {...formProps}>
        <WrapperBack>
          <Button
            type={ButtonTypes.TEXT_ONLY}
            label={<FormattedMessage {...messages.backWard} />}
            onClick={handleBackBtnClick}
          />
        </WrapperBack>
        <RegisterBox>
          <p>{`رمز یکبار مصرف فرستاده شده به شماره ${mobile} وارد کنید‍`}</p>

          <InputField
            type="text"
            name="code"
            autoComplete="off"
            placeholder="کد تایید یکبار مصرف را وارد نمایید"
          />
          {error && <ErrorContainer>{error}</ErrorContainer>}
          <LoginButtonsGroup>
            {countDown > 0 ? (
            <FakeWrap></FakeWrap>
            ) : (
              <RequestAgainCode
                handleResendCodeBtnClick={handleResendCodeBtnClick}
              />
            )}

            <Button
              type={ButtonTypes.FILLED}
              label={<FormattedMessage {...messages.checkCode} />}
              typeAttr="submit"
            />
          </LoginButtonsGroup>
          <WrapperCounter>{countDown}</WrapperCounter>
        </RegisterBox>
      </Form>
    </RegisterFormWrapper>
  );
};

export default ConfirmationCode