import React, { useCallback } from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import {
  RegisterFormWrapper,
  RegisterBox,
  ErrorContainer,
  WrapperBack,
  LoginButtonsGroup,
} from './styles';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';
import { RequestAgainCode, BackStepOneOtp } from './components';

const ConfirmationCode = () => {
  const {
    data: { mobile, loading, error, authFlowStep },
    actions,
  } = useLoginContext();

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: actions[authFlowStep],
  };

  const handleBackOtpBtnClick = useCallback(() => {
    actions.handleBackBtns[authFlowStep]();
  }, [authFlowStep]);

  const handleResendCodeBtnClick = values => {
    if (phoneNumberRegex.test(values.phoneNumber));
    // actions.handleOTPLogin(values);
  };

  return (
    <RegisterFormWrapper>
      <Form {...formProps}>
        <WrapperBack>
          <Button
            type={ButtonTypes.TEXT_ONLY}
            label={<FormattedMessage {...messages.backWard} />}
            onClick={handleBackOtpBtnClick}
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
            <RequestAgainCode
              handleResendCodeBtnClick={handleResendCodeBtnClick}
            />
            <Button
              type={ButtonTypes.FILLED}
              label={<FormattedMessage {...messages.checkCode} />}
              typeAttr="submit"
            />
          </LoginButtonsGroup>

          {/* {loading && <span>در حال پردازش</span>} */}
        </RegisterBox>
      </Form>
    </RegisterFormWrapper>
  );
};

export default ConfirmationCode;
