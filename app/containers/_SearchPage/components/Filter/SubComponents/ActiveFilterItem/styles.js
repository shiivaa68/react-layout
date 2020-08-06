import styled from 'styled-components';

export const ActiveFilterItemBox = styled.section`
  width: fit-content;
  height: fit-content;
  padding: 0.7em 1.5em;
  padding-left: 1.1rem;
  background-color: var(--filter-blue);
  border-radius: 0.25em;
  margin-left: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--primary-white);
  display: flex;
  justify-content: space-between;
  align-items: space-between;

  &:hover img {
    cursor: pointer;
    opacity: 1;
  }

  & > img {
    -webkit-filter: invert(100%);
    filter: invert(100%);
    opacity: 0.6;
    position: relative;
    transition: all 0.15s ease-in-out;
  }
`;

export const Close_IMG = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 1rem;
  top: 1px;
`;

export const Reaload_IMG = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.625rem;
`;
