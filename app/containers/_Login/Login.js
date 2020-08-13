import React from 'react';
import {
  RegisterStepOne,
  LoginForm,
  RegisterStepTwo,
  RegisterStepThree,
} from './components';
import { LoginContext } from './context';
import { LoginWrapper, ImgLogin } from './styles';
import LoginManager from './LoginManager';
import AUTH from 'images/auth.svg';

const Login = () => {
  const { data, errors, actions } = LoginManager();

  const {
    shouldShowStepOneForm,
    shouldShowStepTwoForm,
    shouldShowLoginForm,
    updateShouldShowPassword,
  } = data;

  return (
    <LoginContext.Provider value={{ data, errors, actions }}>
      <LoginWrapper>
        <ImgLogin>
          <img src={AUTH} alt="image login" />
        </ImgLogin>

        {shouldShowStepOneForm && <RegisterStepOne />}
        {shouldShowLoginForm && <LoginForm />}
        {shouldShowStepTwoForm && <RegisterStepTwo />}
        {updateShouldShowPassword && <RegisterStepThree />}
      </LoginWrapper>
    </LoginContext.Provider>
  );
};

export default Login;
