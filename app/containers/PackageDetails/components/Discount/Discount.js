import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { initialValues, validationSchema } from './form';
import messages from '../../components/OrderForm/messages';

import usePkgDetailsContext from 'containers/PackageDetails/context';

import { LoginBox } from './styles';

const Discount = () => {
  const {
    actions: { handleDiscountSubmit },
  } = usePkgDetailsContext();

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: handleDiscountSubmit,
  };

  return (
    <Form {...formProps}>
      <LoginBox>
        <InputField
          type="text"
          name="discount_code"
          placeholder="کد تخفیف"
          autoComplete="off"
        />

        <Button
          id="second_button"
          type={ButtonTypes.FILLED}
          label={<FormattedMessage {...messages.submitOff} />}
          typeAttr="submit"
        />

        {/* {error && <ErrorContainer>{error}</ErrorContainer>} */}
      </LoginBox>
    </Form>
  );
};

export default Discount;
