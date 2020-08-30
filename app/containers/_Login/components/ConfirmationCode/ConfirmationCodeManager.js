import { useState, useEffect, useCallback } from 'react';
import { initialValues, validationSchema } from './form';
import useLoginContext from 'containers/Login/context';
import { phoneNumberRegex } from 'utils/regexUtils';

const COUNT_DOWN_LIMIT = 5;

const ConfirmationCodeManager = () => {
  const {
    data: { mobile, loading, error, authFlowStep },
    actions,
  } = useLoginContext();

  let [countDown, setCountDown] = useState(COUNT_DOWN_LIMIT);

  useEffect(() => {
    let countDownInterval = null;

    if (countDown > 0) {
      countDownInterval = setInterval(() => {
        setCountDown(--countDown);
      }, 1000);
    } else {
      // Call sent code again
      clearInterval(countDownInterval);
    }

    return () => {
      clearInterval(countDownInterval);
    };
  }, [countDown]);

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: actions[authFlowStep],
  };

  const handleBackOtpBtnClick = useCallback(() => {
    actions.handleBackBtns[authFlowStep]();
  }, [authFlowStep]);

  const handleResendCodeBtnClick = useCallback(() => {
    console.log('confimration code resend');
    actions.handleResendCodes[authFlowStep]({ phoneNumber: mobile });
  }, [mobile, authFlowStep]);

  return {
    data: { mobile, loading, error, authFlowStep, countDown },
    actions: { handleBackOtpBtnClick, handleResendCodeBtnClick },
    formProps,
  };
};

export default ConfirmationCodeManager;
