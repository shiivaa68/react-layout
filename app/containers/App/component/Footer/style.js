import styled from 'styled-components';

export const Wrapper = styled.footer`
  height: fit-content;
  min-height: 430px;
  background-color: var(--secondary-dark);
  color: var(--primary-light);
`;

export const FooterLayoutContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding-top: 36px;
  padding-bottom: 48px;
`;

export const FooterMenu = styled.nav`
  width: 100%;
  min-height: 180px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export const FooterSocial = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    padding: 0px;
    margin: 0px;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style-type: none;

    li {
      margin-left: 1rem;
    }
  }
`;

export const FooterCopyRight = styled.div`
  width: 100%;
  height: 20px;
`;
