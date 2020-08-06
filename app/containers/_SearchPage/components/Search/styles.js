import styled from 'styled-components';

export const SearchContainer = styled.article`
  width: 100vw;
  padding: 2rem;
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
  filter: invert(100%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
  position: absolute;
  right: 1rem;
`;

export const CloseSearch=styled.img`
width:15px;
height:15px;
position:absolute;
left:1rem;
font-size: 0.75rem;
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
  font-size: 1.35rem;
  border-radius: 0.5em;
  padding: 0 3.5rem 0 4rem;
`;