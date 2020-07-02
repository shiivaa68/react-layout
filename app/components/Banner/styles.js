import styled from 'styled-components';

export const BannerSection = styled.section`
  margin-bottom: 1.5rem;
  position: relative;
  border-radius: 30px;
  & img {
    border-radius: 10px;
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
 bottom: calc(1rem + 46px);
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
