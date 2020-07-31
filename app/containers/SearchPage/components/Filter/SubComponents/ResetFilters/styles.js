import styled from 'styled-components';

export const ResetFilterBtn = styled.button`
  all: unset;
  width: fit-content;
  height: fit-content;
  padding: 0.7em 1.5em;
  padding-left: 1.1rem;
  color: var(--primary-danger) !important;
  border: 1px solid var(--primary-danger);
  border-radius: 0.25em;
  margin-left: 1rem;
  font-size: 1rem;
  color: var(--primary-white);
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  cursor: pointer;

  & * {
    user-select: none;
  }
`;
