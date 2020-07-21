import styled from 'styled-components';

export const HeadingCoverContainer = styled.section`
  width: 100vw;
  min-height: 46.875vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -8rem;


  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 400px;
    display: block;
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(18, 18, 18, 1),
      rgba(18, 18, 18, 0)
    );
  }
`;

export const CoverImage = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
 
`;

export const CoverDetails = styled.div`
  width: 50vw;
  height: 300px;
  position: absolute;
  right: 2rem;
  z-index: 2;
  padding: 2rem;
`;

export const Title = styled.h1`
  line-height: 1.75;
  user-select: text;
  font-weight: bold;
  margin: 0;
  font-size: 2rem;
  display: block;
`;

export const MovieInformationStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-item: center;
  & div {
    padding: 1rem;
  }
`;

export const Description = styled.div`
  vertical-align: middle;
  display: block;
  font-weight: 400;
  line-height: 2;
  user-select: text;
  margin-bottom: 2rem;
`;

export const ControlButton = styled.div`
margin-bottom: 2rem;

`;

export const GenresStyle =styled.div`
display: flex;
justify-content: flex-start;
align-item: center;

margin-bottom: 1rem;
& div {
  padding: 1rem;
}
`;

export const RangeAgeStyle = styled.div`
display: flex;
justify-content: flex-start;
align-item: center;
padding:10px;

margin-bottom:2rem;
z-index:2;
& img {
width:40px;
margin-left:1rem;


}
& img:nth-child(2){
  text-color:white;
  width:60px;

}

`;

export const MoreInfo =styled.div`

`;
export const MoreDetailInformation=styled.div`
margin-bottom: 2rem;
background:yellow;

`;