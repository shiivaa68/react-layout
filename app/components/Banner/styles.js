import styled from 'styled-components';
import responsive from 'responsive';

export const BannerSection = styled.section`
  margin-bottom: 1.5rem;
  position: relative;
  border-radius: 30px;
  & img {
    border-radius: 5px;
    padding: 3px;
    cursor: pointer;
  }
  &:hover {
    & > button {
      opacity: 1;
    }
  }
  @media ${responsive.tablet} {
    & img {
      border-radius: 10px;
    }
  }
`;

export const HeadingBanner = styled.div`
  position: relative;
  min-height: 50vh;
`;

export const MySwiperContainer = styled.div`
  margin-bottom: 4rem;
  @media ${responsive.tablet} {
    min-height: 10vh;
    max-height: 355px;
    margin-bottom: 0;
    & img {
      padding: 0;
      cursor: unset;
    }
  }

  @media ${responsive.laptop} {
    max-height: 450px;
  }

  @media ${responsive.laptopL} {
    max-height: 550px;
  }
`;

export const BannerNavigators = styled.div`
 width:100px;
 height:46px;
 background-color: #807371;
 border-radius:30px;
 position: absolute;
 z-index:2;
 left:2.5rem;
 bottom: calc(3rem + 46px);
 display:flex;
 justify-content:space-evenly;
 align-items:center;
 & button {
   all:unset;
   color:#E7DBDB;
& i {
  display:flex;
}
   :hover {
     color:#151212;
   },
 }
 `;

export const PrevButton = styled.button`
cursor: pointer;

  all: unset;
  position: absolute;
  z-index: 10;
  right: 0;
  top: 0;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.425rem;
  color: var(--primary-light);
  background: linear-gradient(to left, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0));
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const NextButton = styled.button`
cursor: pointer;

  all: unset;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 100%;
  font-size: 1.425rem;
  color: var(--primary-light);
  background: linear-gradient(to right, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0));
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 0 1rem;
`;