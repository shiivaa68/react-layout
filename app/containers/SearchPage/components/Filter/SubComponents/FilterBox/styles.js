import styled from 'styled-components';
import responsive from 'responsive';

export const FilterBoxContainer = styled.section`
  width: 100%;
  background: red;
  margin: 1rem 0;
  overflow: hidden;
  border-radius: 0.75rem;
  color: var(--primary-white);
  background-color: var(--secondary-dark);
  display: grid;
  grid-template-columns: 35% 65%;

  @media ${responsive.tablet} {
    grid-template-columns: 25% 75%;
  }
`;

export const SideNav = styled.ul`
  all: unset;
  min-height: 300px;
  padding: 1.5rem 0;
  list-style-type: none;
  background-color: var(--secondary-gray);
  li {
    text-align: right;
  }
`;

export const FilterContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-color: var(--dim-gray);
`;
