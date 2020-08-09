const loginUserNameRegex = /^[A-Za-z0-9]{5,15}$/;
const phoneNumberRegex = /^(0[\s]?)9[0-39]\d[\s]?\d{3}[\s]?\d{4}$/;
const passwordRegex = /^[A-Za-z0-9-.;_!#@]{5,15}$/;
const englishRegex = /^[a-zA-Z 0-9]+$/;
const persianRegex = /^[\u0600-\u06FF\s]+$/;
const homePhoneRegex = /^[0-9]{7,10}/;
const postalCodeRegex = /^\d{10}$/;
const bankAccountRegex = /^\d{1,4}\.\d{1,4}\.\d{4,9}\.\d{1,2}$/;
const emailRegex = /^(([^<>()\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;

export {
  loginUserNameRegex,
  emailRegex,
  postalCodeRegex,
  homePhoneRegex,
  bankAccountRegex,
  phoneNumberRegex,
  englishRegex,
  persianRegex,
  passwordRegex,
};
