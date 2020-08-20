import styled from 'styled-components';

export const PackageViewLayout = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 25px;
  color: var(--primary-light);
`;

export const Title = styled.h2`
  margin: 0;
  color: var(--primary-dark);
  padding: 0 1rem;
`;

export const PackageWrapper = styled.section`
  width: 70vw;
  min-height: 30vh;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  background-color: var(--primary-light);
`;

export const PackagesBoxContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

export const Line = styled.hr`
  color: var(--primary-dark);
  background-color: coral;
`;
