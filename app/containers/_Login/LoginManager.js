import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import { getRegisterStepOneAction } from './redux/actions';
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
  const [shouldShowStepOneForm, setShouldShowStepOneForm] = useState(true);
  const [shouldShowLoginForm, setShouldShowLoginForm] = useState(false);
  const [shouldShowRegisterForm, setShouldShowRegisterForm] = useState(false);

  /** Redux Data */
  const { userData } = useSelector(state => state.global);
  const {
    loading_register_one,
    error_register_one,
    shouldShowLogin,
    shouldShowRegister,
  } = useSelector(state => state.LoginFlow || InitialState);

  useEffect(() => {
    if (shouldShowLogin) setShouldShowLoginForm(true);
    if (shouldShowRegister) setShouldShowRegisterForm(true);
    if (shouldShowLogin || shouldShowRegister) setShouldShowStepOneForm(false);
  }, [shouldShowLogin, shouldShowRegister]);

  /** bounded redux actions */
  const [getRegisterStepOne] = useBindDispatch([getRegisterStepOneAction]);

  /** handlers */
  const handleRegisterStepOneSubmittion = useCallback(({ phoneNumber }) => {
    getRegisterStepOne({ phoneNumber });
    setMobile(phoneNumber);
  }, []);

  return {
    data: {
      /** loadings */
      loading_register_one,

      /** conditional data */
      shouldShowStepOneForm,
      shouldShowLoginForm,
      shouldShowRegisterForm,

      // phoneNumber,
    },
    errors: {
      error_register_one,
    },
    actions: {
      handleRegisterStepOneSubmittion,
    },
  };
};

export default LoginManager;
