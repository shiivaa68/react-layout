import React from 'react';
import Form from 'components/Form';
import { Button, InputField } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import { RegisterFormWrapper, RegisterBox } from './styles';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import useLoginContext from 'containers/Login/context';

const ConfirmationCode = () => {
  const {
    data: { mobile, loading, error, authFlowStep },
    actions,
  } = useLoginContext();

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: actions[authFlowStep],
  };

  return (
    <RegisterFormWrapper>
      <Form {...formProps}>
        <RegisterBox>
          <p>{`رمز یکبار مصرف فرستاده شده به شماره ${mobile} وارد کنید‍`}</p>

          <InputField
            type="text"
            name="code"
            autoComplete="off"
            placeholder="کد تایید یکبار مصرف را وارد نمایید"
          />

          <Button
            type={ButtonTypes.FILLED}
            label={<FormattedMessage {...messages.checkCode} />}
            typeAttr="submit"
          />

          {loading && <span>در حال پردازش</span>}
          {error && <span>{error}</span>}
        </RegisterBox>
      </Form>
    </RegisterFormWrapper>
  );
};

export default ConfirmationCode;
