import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';

import {
    LoginWrapper,
    LoginBox,
    LoginButtonsGroup,
  } from './styles';

const LoginForm = () => {

    const {
        data: { loading_login },
        errors: { error_login },
        actions: { handleLoginSubmittion },
      } = useLoginContext();


    const formProps = {
        initialValues,
        validationSchema,
        onSubmit: handleLoginSubmittion,
      };


    return (
        <LoginWrapper>
          <Form {...formProps}>
            <LoginBox>
              <InputField
                type="text"
                name="phoneNumber"
                icon={'fas fa-phone'}
                placeholder="09*********"
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
              <LoginButtonsGroup>
                <Button
                  type={ButtonTypes.TEXT_ONLY}
                  label={<FormattedMessage {...messages.forgetPassword} />}
                  typeAttr="submit"
                />
                  <Button
                  type={ButtonTypes.FILLED}
                  label={<FormattedMessage {...messages.submitLogin} />}
                  typeAttr="submit"
                />
    
                {error_login && <span>{error_login}</span>}
                {loading_login && <span>در حال پردازش</span>}
    
              </LoginButtonsGroup>
            </LoginBox>
          </Form>
        </LoginWrapper>
      );
   
};

export default LoginForm;