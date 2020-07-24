import styled from 'styled-components';

export const SearchContainer = styled.article`
  width: 100vw;
  padding: 1rem;
  background-color: red;
  box-sizing: border-box;
`;
export const SearchBox = styled.article`
  width: 100%;
  background-color: var(--primary-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const ClearText = styled.span`
  font-size: 0.85rem;
`;

export const CloseIcon = styled.i`
  font-size: 1rem;
`;
