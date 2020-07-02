import React from 'react';
import { ErrorContainer, ErrorEmoji, ErrorMessage } from './styles';

const ErrorComponent = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorEmoji>:((</ErrorEmoji>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorComponent;
