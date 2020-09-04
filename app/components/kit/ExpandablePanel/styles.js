import styled from 'styled-components';
import responsive from '../../../responsive';
const StyledButton = styled.a`
  display: inline-block;
  width: 100%;
  font-size: smaller;
  text-align: right;
  padding: 0.75rem 1.25rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2px 0;
  background-color: var(--gray-light);
  border-radius: 10px;
  color: ${prop =>
    prop.open ? 'var(--primary-light)' : 'var(--primary-dark)'};
  background-color: ${prop =>
    prop.open ? 'var(--blue-light)' : 'var(--gray-light)'};
`;

const M = styled.div`
  display: inline-block;
  width: 100%;
  font-size: smaller;
  text-align: center;
  padding: 0.75rem 1.25rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 0;
  background-color: var(--gray-light);
  border-radius: 5px;
  color: var(--primary-light);
  background-color: var(--blue-light);
  margin: 18px 0;

`;

const StyledDivParent = styled.div`
  -webkit-border-radius: 0% 0% 100% 100% / 0% 0% 8px 8px;
`;

const H = styled.h3`
  color: var(--primary-dark);
  text-align: center;
`;

const StyledDivChild = styled.div`
  color: var(--primary-dark);
  direction: rtl;
  margin: auto;
  margin-top: 0;
  width: 100%;
  max-width: 105vh;
  min-height: 80vh;
  font-size: small;
  transition: all 300ms ease-out;
  margin-top: 80px;
  background-color: var(--primary-light);
  @media ${responsive.mobileS} {
    padding: 10px;
  }
  @media ${responsive.mobileL} {
    padding: 15px;
  }
  @media ${responsive.tablet} {
    border-radius: 25px;
    padding: 30px;
    width: 80%;
    margin-top: 96px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Details = styled.div`
  transition: transform 0.3s ease-out;
  height: ${prop => (prop.open ? 'auto' : '0')};
  overflow: hidden;
  transform: scaleY(${prop => (prop.open ? '1' : '0')});
  transform-origin: top;
  text-align: justify;
  background-color: var(--light-blue);
  padding: ${prop => (prop.open ? '10px' : '0')} 25px;
`;

const Img = styled.img`
  width: 16px;
`;

export { StyledDivParent, StyledDivChild, StyledButton, Wrapper, Details, Img, H, M };
