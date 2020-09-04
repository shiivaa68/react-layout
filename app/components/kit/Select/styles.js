import styled from 'styled-components';

const SelectWrapper = styled.span`
    font-family: 'Vazir FD','Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    direction: rtl;
    user-select: none;
    color: #ffffff;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    list-style: none;
    width: 100%;
    text-align: center;
    img {
        width: 19px;
    }
`;

const ListWrapper = styled.ul`
    top: 35px;
    z-index: 100;
    position: absolute;
    min-width: 175px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
    border-radius: 8px;
    background-color: #ffffff;
    direction: rtl;
    padding: 0 1rem;
`;
const Selected = styled.span`
    direction: rtl;
    user-select: none;
    list-style: none;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    padding: 10px 20px 10px 10px;
    border-radius: 8px;     
    background-color: #ffffff;
    color: var(--primary-dark);
    width: 100%;
`;

const Option = styled.li`
    color: ${props => props.keepActive ? '#1993ff' : '#000000'};
    cursor: pointer;
    display: block;
    height: 40px;
    display: flex;
    align-items: center;
    &:hover {
        color: #1993ff;
      }
`;

export {
    SelectWrapper,
    Option,
    ListWrapper,
    Selected
}