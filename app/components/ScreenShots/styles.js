import styled from 'styled-components';
import responsive from 'responsive';

export const ScreenShotWrapper = styled.section`

 min-height:300px;
 position:relative;
 display:flex;
 justify-content:flex-start;
 flex-direction:column;
 padding: 0 3rem;

 & img {
    padding: 0.75rem;
    border-radius:20px;
    z-index:2;
  }

  & video {
    padding: 0.75rem;
    border-radius:20px;
  }
`;

export const Title = styled.h3`
width:100%;
margin:1rem 0 ;
z-index:2;
`;

export const LightBox = styled.div`
position:fixed;
top:0;
left:0;
buttom:0;
right:0;
width:100vw;
height:100vh;
z-index:100000 ;
svg {
  z-index: 10 !important;
}
`;


export const ImageCover = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-around;
align-item:center;
flex-direction:row;
img {
  width: 45%;
}

@media ${responsive.mobileL} {
  img {
    width: 30%;
  }
}
@media ${responsive.tablet} {
  img {
    width: unset;
  }
}
`;

