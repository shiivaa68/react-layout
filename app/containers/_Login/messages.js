import { defineMessages } from 'react-intl';
import { rules } from 'eslint-config-prettier';

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
  },
  
  rules:{
    id: `${scope}.rules`,
    defaultMessage: ' با ورود یا ثبت نام قوانین استفاده از سایت را می پذیرم . ',
  }
}); 