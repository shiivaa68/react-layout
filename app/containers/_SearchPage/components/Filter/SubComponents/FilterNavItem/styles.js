import styled, { css } from 'styled-components';

export const FilterNavItemContainer = styled.li`
  width: 100%;
  min-height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.75rem;

  ${props =>
    props.isActive &&
    css`
      background-color: var(--dim-gray);
    `}
`;
