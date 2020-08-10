import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Login';

export default defineMessages({
  login_register: {
    id: `${scope}.login_register`,
    defaultMessage: 'ورود/ثبت نام',
  },
  mobile: {
    id: `${scope}.mobile`,
    defaultMessage: 'شماره تلفن همراه',
  },
  forgetPassword: {
    id: `${scope}.forgetPassword`,
    defaultMessage: 'رمز عبورم را فراموش کردم',
  },
});