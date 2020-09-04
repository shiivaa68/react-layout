import styled,{css} from 'styled-components';

export const CheckBoxWrapper = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
height:62px;
font-size:12px;
`;

export const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  top: -6px;
  left: 10px;
  & * {
    border-radius: 5px;
  }
  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  &:hover input ~ span {
    background-color: #ccc;
  }
  & > input:checked ~ span {
    background-color: #2196f3;
  }
  & > input:checked ~ span:after {
    display: block;
  }
  & span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckboxInput = styled.input``;

export const CheckboxSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;