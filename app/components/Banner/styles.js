import styled from 'styled-components';

export const BannerSection = styled.section`
  margin-bottom: 1.5rem;
  position: relative;
`;

export const HeadingBanner = styled.div`
  position: 'relative';
  min-height: 50vh;
`;

export const BannerItem = styled.div`
  width: 250px;
  height: 125px;
  display: block;
  background: rgba(255, 0, 0, 0.85);
  border-radius: 0.2rem;
  padding: 1rem;
  font-size: 2rem;
  position: absolute;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
  border-radius: 30px;
  & img {
    border-radius: 10px;
  }
`;

export const BannerNavigators = styled.div`
  width: 100px;
  height: 46px;

  background-color: #807371;
  border-radius: 30px;
  position: absolute;
  z-index: 2;
  left: 2.5rem;
  bottom: calc(3rem + 46px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & button {
    all: unset;
    color: #e7dbdb;
    & i {
      display: flex;
    }
    :hover {
      color: #151212;
    }
  }
`;
