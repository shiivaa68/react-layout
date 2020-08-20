import React from 'react';
import {
  EnterPhoneNumber,
  AskPassword,
  ConfirmationCode,
  SetPassword,
} from './components';
import { LoginContext } from './context';
import { LoginWrapper, ImgLogin } from './styles';
import LoginManager from './LoginManager';
import AUTH from 'images/auth.svg';
import useMyMediaQuery from 'utils/useMyMediaQuery'

const Login = () => {
  const { data, errors, actions } = LoginManager();
  const { isMobile } = useMyMediaQuery();

  const {
    shouldShowEnterPhoneNumberForm,
    shouldShowConfirmationCodeForm,
    shouldShowAskPasswordForm,
    shouldShowSetPasswordForm,
  } = data;

  return (
    <LoginContext.Provider value={{ data, errors, actions }}>
      <LoginWrapper isMobile={isMobile}>
        <ImgLogin>
          <img src={AUTH} alt="image login" />
        </ImgLogin>

        {shouldShowEnterPhoneNumberForm && <EnterPhoneNumber />}
        {shouldShowConfirmationCodeForm && <ConfirmationCode />}
        {shouldShowAskPasswordForm && <AskPassword />}
        {shouldShowSetPasswordForm && <SetPassword />}
      </LoginWrapper>
    </LoginContext.Provider>
  );
};

export default Login;
