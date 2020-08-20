import styled from 'styled-components';

export const PackageContainer = styled.section`
  position: relative;
  width: 70vw;
  background-color: var(--light);
  border-radius: 10px;
  color: var(--primary-dark);
  padding: 2rem;
  font-weight: bold;
  border: 1px;
`;

export const TitlePage = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
`;

export const TitlePackagewrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-beetween;
  align-items: center;
  flex-direction: column;
  font-size: 1.25rem;
  margin-top: 1.25em;
  padding-bottom: 1.25em;
  color: var(--primary-gray);

  h4 {
    margin: 0;
  }
`;

export const DescriptionArea = styled.div`
  width: 100%;
  height: 20vh;
  padding: 1.5rem;
  margin: 1rem 0;
  background-color: var(--primary-white);

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PriceArea = styled.div`
  color: var(--dark-blue);
  ${props => (props.isLineThrough ? 'text-decoration: line-through' : null)};
`;
export const DescriptionPack = styled.div``;
export const DescriptionTitle = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: repeat(3, 1fr);

  & span {
    padding: 0 0.5rem;
    align-self: center;
    justify-self: flex-start;
  }
`;
export const DescriptionPrice = styled.div`
  color: var(--dark-blue);
  display: grid;
  grid-template-rows: repeat(3, 1fr);

  & div {
    padding: 0 0.5rem;
    align-self: center;
    justify-self: flex-end;
  }
`;

export const ContainerCode = styled.div`
  width: 100%;
  border-radius: 10px;
`;

export const Title = styled.h2`
  /* padding-bottom: 1rem; */
`;

export const WraperInput = styled.div`
  padding: -2rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  display: block;
  background-color: var(--gray-light);
  margin: 1rem 0;
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  & > button {
    width: 100%;
    margin: 0rem;
    height: 48px;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.3rem;
  }
`;
