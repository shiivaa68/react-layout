import React from 'react';
import { ErrorContainer, ErrorEmoji, ErrorMessage } from './style';

const ErrorComponent = ({ message }) => (
  <ErrorContainer>
    <ErrorEmoji>:((</ErrorEmoji>
    <ErrorMessage>{message ? message : 'صفحه مورد نظر پیدا نشد'}</ErrorMessage>
  </ErrorContainer>
);

export default ErrorComponent;
