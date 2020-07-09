import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 100vw;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--primary-light);
`;

export const ErrorEmoji = styled.p`
  font-size: 10rem;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  font-size: 4rem;
  padding: 1rem 0;
`;
