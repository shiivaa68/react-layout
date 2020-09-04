import styled from 'styled-components';
import responsive from 'responsive';

export const SortTypeWrapper = styled.section`
  height: 100%;
  min-width: 170px;
  max-width: 200px;
  @media ${responsive.tablet} {
    margin:unset;
  }
`;

export const Select =styled.select`
width: 100%;
height:40px;
border-radius:3px;
background: var(--primary-light);
padding-left: 5px;
font-size: 14px;
border:none;
margin-left: 10px;
option {
  color: black;
  background: white;
  font-weight: small;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
}
`;