import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Login';

export default defineMessages({
  login_register: {
    id: `${scope}.login_register`,
    defaultMessage: 'ورود/ثبت نام',
  },
  
  mobile: {
    id: `${scope}.mobile`,
    defaultMessage: 'ورود از طریق شماره تلفن همراه',
  },

  otpMessage: {
    id: `${scope}.otpMessage`,
    defaultMessage: 'ورود با رمز یک بار مصرف',
  },

  forgetPassword: {
    id: `${scope}.forgetPassword`,
    defaultMessage: 'رمز عبورم را فراموش کردم',
  },

 password: {
    id: `${scope}.password`,
    defaultMessage: 'رمز عبور',
  },

  submitLogin:{
    id: `${scope}.submitLogin`,
    defaultMessage: ' ورود',
  },

  checkCode: {
    id: `${scope}.checkCode`,
    defaultMessage: 'بررسی کد تایید',
  },

  passwordNew:{
    id: `${scope}.passwordNew`,
    defaultMessage: ' رمز عبور',
  },

  passwordRepeat:{
    id: `${scope}.passwordRepeat`,
    defaultMessage: ' تکرار رمز عبور',
  }
}); 