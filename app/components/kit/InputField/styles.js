import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 80%;
  min-height: 115px;
`;

export const InputLabel = styled.label`
  position: relative;
  padding-right: 0.75rem;
`;

export const Input = styled.input`
  width: 100%;
  min-height: 42px;
  border: 0px;
  outline: 0px;
  margin: 0;
  padding: 0 1rem;
  border-radius: 0.25em;
  font-size: 1rem;
  line-height: 52px;
  transition: 5000s ease-in-out 0s;
  background-color: var(--secondary-dark);
  color: var(--primary-light);
  font-size: 1.5rem;
`;

export const InputLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
  background-color: var(--secondary-dark);
  direction: ltr;
  & > i {
    width: 40px;
    padding-left: 1rem;
  }
`;

export const InputError = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  height: 42px;
  color: var(--primary-danger);
  background-color: rgba(235, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
