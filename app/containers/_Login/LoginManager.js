import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import {
  getRegisterStepOneAction,
  postConfirmationCodeAction,
  getRegisterStepThreeAction,
  getLoginAction,
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
  const [code, setCode] = useState(null);
  const [shouldShowStepOneForm, setShouldShowStepOneForm] = useState(true);
  const [shouldShowStepTwoForm, setshouldShowStepTwoForm] = useState(false);
  const [shouldShowStepThreeForm, setshouldShowStepThreeForm] = useState(false);

  const [shouldShowLoginForm, setShouldShowLoginForm] = useState(false);

  /** Redux Data */
  const { userData } = useSelector(state => state.global);
  const {
    loading_register_one,
    error_register_one,

    loading_register_three,
    error_register_three,

    loading_login,
    error_login,

    shouldShowLogin,
    shouldShowRegister,
    shouldShowRegisterthree,

    updateShouldShowPassword,

    //  // confirm code
    //  confirmCodeLoading,
    //  confirmCodeError,
    //  confirmCodeSuccess,
  } = useSelector(state => state.LoginFlow || InitialState);

  useEffect(() => {
    if (shouldShowLogin) setShouldShowLoginForm(true);
    if (shouldShowRegister) setshouldShowStepTwoForm(true);
    if (shouldShowLogin || shouldShowRegister) setShouldShowStepOneForm(false);
    if (updateShouldShowPassword) {
      setshouldShowStepTwoForm(false);
      setshouldShowStepThreeForm(true);
    }
  }, [shouldShowLogin, shouldShowRegister, updateShouldShowPassword]);

  /** bounded redux actions */
  const [
    getRegisterStepOne,
    postConfirmationCode,
    getRegisterStepThree,
    getLogin,
  ] = useBindDispatch([
    getRegisterStepOneAction,
    postConfirmationCodeAction,
    getRegisterStepThreeAction,
    getLoginAction,
  ]);
  /** handlers */
  const handleRegisterStepOneSubmittion = useCallback(({ phoneNumber }) => {
    getRegisterStepOne({ phoneNumber });
    setMobile(phoneNumber);
  }, []);

  const handleConfiramtionCode = useCallback(
    ({ code }) => {
      postConfirmationCode({ mobile, code });
      setCode(code);
    },
    [mobile],
  );
  const handleRegisterStepThreeSubmittion = useCallback(
    ({ password }) => {
      getRegisterStepThree({ mobile, code, password });
    },
    [mobile, code],
  );

  const handleLoginSubmittion = useCallback(({ phoneNumber, password }) => {
    getLogin({ phoneNumber, password });
  }, []);

  return {
    data: {
      /** loadings */
      loading_register_one,
      loading_register_three,
      loading_login,

      /** conditional data */
      shouldShowStepOneForm,
      shouldShowStepTwoForm,
      shouldShowStepThreeForm,
      shouldShowLoginForm,
      updateShouldShowPassword,
      code,
      mobile,
    },
    errors: {
      error_register_one,
      error_register_three,
      error_login,
    },
    actions: {
      handleRegisterStepOneSubmittion,
      handleRegisterStepThreeSubmittion,
      handleConfiramtionCode,
      handleLoginSubmittion,
    },
  };
};

export default LoginManager;
