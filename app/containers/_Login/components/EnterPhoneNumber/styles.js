import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterStepOneWrapper = styled.article`
  width: 100%;
  max-width: 500px;
  * {
    font-family: var(--primary-font);
  }
`;

export const LoginBox = styled.section`
  width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-family: var(--primary-font);
`;

export const LoginButtonsGroup = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom:2rem;
  & > button {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    font-size: 0.90rem;
  }
`;

export const RulesSite= styled(Link)`
width: 80%;
height: 20px;
display:inline-flex;
text-decoration:none;
user-select:  none;
cursor: pointer;
margin_buttom: 2rem;
padding-right:2rem;
list-style-type: none;
color:white;
 :hover {
    color:var(--dim-blue);
} ;
`;