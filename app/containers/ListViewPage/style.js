import styled from 'styled-components';

export const ListViewLayout = styled.article`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: var(--primary-light);
`;

export const Title = styled.h1`
  margin-top: 100px;
  width: 100%;
  padding: 2rem;
`;

export const ListWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 2rem;
`;

export const WayPointArea = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
