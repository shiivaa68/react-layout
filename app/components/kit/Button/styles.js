import styled, { css } from 'styled-components';

export const ButtonComponent = styled.button`
  all: unset;
  color: var(--primary-light);
  font-size: 0.75rem;
  background-color: transparent;
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0.625em 1.5em;
  border-radius: 0.25em;

  ${props =>
    props.outlined &&
    css`
      border: 1px solid var(--primary-light);

      &:hover {
        background-color: var(--primary-light);
        color: var(--primary-dark);
      }
    `}

  ${props =>
    props.text_only &&
    css`
      &:hover {
        color: var(--dim-blue);
      }
    `}

    ${props =>
      props.fullfill &&
      css`
        font-size: 1rem;
        background-color: var(--primary-light);
        color: var(--primary-dark);

        &:hover {
          background-color: var(--dark-blue);
          color: var(--primary-light);
        }
      `}
      ${props =>
        props.outfill &&
        css`
          font-size: 1rem;
          border: 1px solid var(--primary-light);

          &:hover {
            background-color: var(--dark-blue);
            color: var(--primary-light);
            border: 1px solid var(--dark-blue);
          }
        `}




`;
