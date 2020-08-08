import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { LoginWrapper, LoginBox, LoginButtonsGroup } from './styles';

import LoginManager from './LoginManager';

const Login = () => {
  const {
    data: {},
    actions: {
      handleLoginWithUserPass,
      handleLoginWithOTP,
      handleLoginWithAsiaTak,
    },
    formProps,
  } = LoginManager();

  return (
    <LoginWrapper>
      <LoginBox>
        <Form {...formProps}>
          <InputField
            type="number"
            name="phoneNumber"
            label="شماره تلفن همراه"
            placeholder="9** *** ****"
          />

          <LoginButtonsGroup>
            <Button
              type={ButtonTypes.FULLFILL}
              label="user/pass"
              typeAttr="submit"
              // onClick={handleLoginWithUserPass}
            />
            <Button
              type={ButtonTypes.FULLFILL}
              label="OTP"
              typeAttr="submit"
              // onClick={handleLoginWithOTP}
            />
            <Button
              type={ButtonTypes.FULLFILL}
              label="LOGIN WITH ASIATEK"
              onClick={handleLoginWithAsiaTak}
            />
          </LoginButtonsGroup>
        </Form>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
