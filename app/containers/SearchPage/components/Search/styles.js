import styled from 'styled-components';

export const SearchContainer = styled.article`
  width: 100vw;
  padding: 1rem;
`;
export const SearchBox = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const SearchImage = styled.img`
  width: 24px;
  height: 24px;
  background: black;
  position: absolute;
  right: 1rem;
`;

export const ClearText = styled.span`
  font-size: 0.85rem;
  position: absolute;
  left: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 64px;
  border: 0px;
  outline: 0px;
  line-height: 2rem;
  font-size: 1.425rem;
  border-radius: 0.5em;
  padding: 0 3.5rem 0 4rem;
`;
