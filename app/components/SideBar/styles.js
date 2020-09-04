import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSidebar = styled.div`
  direction: rtl;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  width: 235px;
  height: 100%;
  flex-direction: column;
  padding: 66px 20px;
  background: var(--side-bg);
  color: #fff;
  transition: transform 0.25s ease;
  will-change: transform;
  transform: translateX(+100%);
  overflow-y: hidden;
  z-index: 6;
  ${props =>
    props.isShown
      ? css`
          transform: translateX(0);
        `
      : ``};
`;

export const Icon = styled.img`
  width: ${props => (props.width ? props.width : '24px')};
  margin: 10px;
`;
const NavClose = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -48px;
  right: 16px;
  margin-bottom: 48px;
  margin-right: 3px;
  align-items: center;
`;

const NavLink = styled(Link)`
  width: 100%;
  margin-bottom: 8px;
  color: #fff;
  text-decoration: none;
  font-size: smaller;
  &:hover {
    color: var(--blue-light);
  }
`;

const NavBlankLink = styled.a`
  width: 100%;
  margin-bottom: 8px;
  color: #fff;
  text-decoration: none;
  font-size: smaller;
  &:hover {
    color: var(--blue-light);
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export { ButtonWrapper, StyledSidebar, NavClose, NavLink, NavBlankLink, NavHeader };
