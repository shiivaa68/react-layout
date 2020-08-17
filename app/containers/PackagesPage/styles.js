import styled from 'styled-components';

export const PackageViewLayout = styled.article`
  width: 80vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin:3rem;
  border-radius: 25px;
  color: var(--primary-light);
`;

export const Title = styled.h2`
  margin:0;
  color: var(--primary-dark);
  width: 90%;
  padding: 1rem;
`;

export const PackageWrapper = styled.section`
  position: absolute;
  width: 70vw;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 25px;
  background-color:  var(--primary-light);
`;
export const Line = styled.hr`
  color: var(--primary-dark);
  background-color: coral;
`;
