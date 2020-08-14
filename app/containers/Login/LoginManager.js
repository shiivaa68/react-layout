import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AUTH_FLOW_STEPS } from '../../constants';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import {
  enterPhoneNumberAction,
  enterOTPLoginPhoneNumberAction,
  registerConfirmCodeAction,
  registerSetNewPasswordAction,
  loginAskPasswordAction,
} from './redux/actions';
import LoginPageReducer from './redux/reducer';
import LoginPageSaga from './redux/saga';
import InitialState from './redux/initialState';

const LoginFlowKeyOnRedux = 'LoginFlow';

const LoginManager = () => {
  /** Injectors */
  useInjectReducer({ key: LoginFlowKeyOnRedux, reducer: LoginPageReducer });
  useInjectSaga({ key: LoginFlowKeyOnRedux, saga: LoginPageSaga });

  /** local States */
  const [mobile, setMobile] = useState(null);
  const [confirmationCode, setConfirmationCode] = useState(null);

  /** Redux Data */
  const { userData } = useSelector(state => state.global);
  const { loading, error, authFlowStep } = useSelector(
    state => state.LoginFlow || InitialState,
  );

  /** bounded redux actions */
  const [
    enterPhoneNumber,
    enterOTPLoginPhoneNumber,
    registerConfirmCode,
    registerSetNewPassword,
    loginAskPassword,
  ] = useBindDispatch([
    enterPhoneNumberAction,
    enterOTPLoginPhoneNumberAction,
    registerConfirmCodeAction,
    registerSetNewPasswordAction,
    loginAskPasswordAction,
  ]);

  /** Handlers */
  const handleEnterPhoneNumber = useCallback(({ phoneNumber }) => {
    enterPhoneNumber({ phoneNumber });
    setMobile(phoneNumber);
  }, []);

  const handleOTPLogin = useCallback(({ phoneNumber }) => {
    enterOTPLoginPhoneNumber({ phoneNumber });
    setMobile(phoneNumber);
  }, []);

  const handleRegisterConfirmationCode = useCallback(
    ({ code }) => {
      registerConfirmCode({ mobile, code });
      setConfirmationCode(code);
    },
    [mobile],
  );

  const handleOTPConfirmationCode = useCallback(
    ({ code }) => {
      // TODO
      //  - OTP STEP 2 Action
      setConfirmationCode(code);
    },
    [mobile],
  );

  const handleRegisterSetPassword = useCallback(
    ({ password }) => {
      const extra = {
        browser:
          window.navigator.appName == '' || window.navigator.userAgent == '',
      };
      registerSetNewPassword({
        mobile,
        confirmationCode,
        password: btoa(password),
        extra,
      });
    },
    [mobile, confirmationCode],
  );

  const handleLoginAskPassword = useCallback(
    ({ password }) => {
      const extra = {
        browser:
          window.navigator.appName == '' || window.navigator.userAgent == '',
      };
      loginAskPassword({ mobile, password: btoa(password), extra });
    },
    [mobile],
  );

  /** form status handlers */
  const shouldShowEnterPhoneNumberForm = useMemo(() => {
    if (authFlowStep === AUTH_FLOW_STEPS.ENTER_PHONE_NUMBER) return true;
    else false;
  }, [authFlowStep]);

  const shouldShowConfirmationCodeForm = useMemo(() => {
    if (
      authFlowStep === AUTH_FLOW_STEPS.REGISTER_CONFIRMATION_CODE ||
      authFlowStep === AUTH_FLOW_STEPS.FORGET_PASSWORD_CONFIRMATION_CODE ||
      authFlowStep === AUTH_FLOW_STEPS.OTP_CONFIRMATION_CODE
    )
      return true;
    else false;
  }, [authFlowStep]);

  const shouldShowAskPasswordForm = useMemo(() => {
    if (authFlowStep === AUTH_FLOW_STEPS.LOGIN_ASK_PASSWORD) return true;
    else false;
  }, [authFlowStep]);

  const shouldShowSetPasswordForm = useMemo(() => {
    if (
      authFlowStep === AUTH_FLOW_STEPS.FORGET_PASSWORD_NEW_PASSWORD ||
      authFlowStep === AUTH_FLOW_STEPS.REGISTER_NEW_PASSWORD
    )
      return true;
    else false;
  }, [authFlowStep]);

  return {
    data: {
      error,
      loading,
      authFlowStep,

      mobile,
      confirmationCode,

      shouldShowEnterPhoneNumberForm,
      shouldShowConfirmationCodeForm,
      shouldShowAskPasswordForm,
      shouldShowSetPasswordForm,
    },
    actions: {
      [AUTH_FLOW_STEPS.ENTER_PHONE_NUMBER]: handleEnterPhoneNumber,

      [AUTH_FLOW_STEPS.REGISTER_CONFIRMATION_CODE]: handleRegisterConfirmationCode,
      [AUTH_FLOW_STEPS.REGISTER_NEW_PASSWORD]: handleRegisterSetPassword,

      [AUTH_FLOW_STEPS.LOGIN_ASK_PASSWORD]: handleLoginAskPassword,

      handleOTPLogin,
      [AUTH_FLOW_STEPS.OTP_CONFIRMATION_CODE]: handleOTPConfirmationCode,
    },
  };
};

export default LoginManager;
