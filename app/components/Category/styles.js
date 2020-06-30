import styled from 'styled-components';

export const CategorySection = styled.section`
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const CategoryHeading = styled.div`
  width: 100vw;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const Heading = styled.h3`
  color: var(--primary-light);
  font-size: 1rem;
  margin: 0 0.3rem 0 0;
`;

export const ShowMore = styled.div`
  color: var(--primary-light);
  font-size: 1rem;
  margin-left: 1rem;
  display: flex;
  justify-content: flex-start;
  font-family: var(--primary-White-Color);
  padding: 0 1rem;
  cursor: pointer;
`;

export const CategoryBody = styled.div`
  width: 100vw;
`;

export const FooterCategory = styled.p`
  color: var(--primary-white);
  cursor: pointer;
  font-size: 1rem;
  max-height: 3.58e;
  vertical-align: middle;
  user-select: none;
  white-space: initial;
  font-family: var(--primary-White-Color);
`;

export const CategoryNavigators = styled.div``;
