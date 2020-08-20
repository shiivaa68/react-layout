import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { initialValues, validationSchema } from './form';
import messages from '../../components/OrderForm/messages';

import {
  RegisterStepOneWrapper,
  LoginBox,
  LoginButtonsGroup,
  ErrorContainer,
} from './styles';

const EnterCodeOff = () => {

  const formProps = {
    initialValues,
    validationSchema,
    // onSubmit:actions.handleOTPBtnClick(),
  };

 

  return (
 <RegisterStepOneWrapper>
 <Form {...formProps}>
        <LoginBox>
          <InputField
            type="text"
            name="discount_code"
            // placeholder="کد تخفیف"
            autoComplete="off"
          />
          <LoginButtonsGroup>
            <Button
              id="second_button"
              type={ButtonTypes.FILLED}
              label={<FormattedMessage {...messages.submitOff} />}
              typeAttr="submit"
            />
          </LoginButtonsGroup>

          {/* {error && <ErrorContainer>{error}</ErrorContainer>} */}
        </LoginBox>
      </Form>
 </RegisterStepOneWrapper>
     
  );
};

export default EnterCodeOff;
