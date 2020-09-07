import styled from 'styled-components';
import responsive from '../../responsive';

export const HeadingCoverContainer = styled.section`
  width: 100%;
  min-height: 46.875vw;
  // position: relative;
  display: flex;
  margin-bottom: -2rem;
  justify-content: center;

  @media ${responsive.tablet} {
    margin-bottom: -4rem;
  }
  @media ${responsive.laptopL} {
    margin-bottom: -7rem;
  }

  @media ${responsive.laptopXL} {
    margin-bottom: -12rem;
  }

  @media ${responsive.desktop} {
    margin-bottom: -15rem;
  }
`;

export const CoverImage = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
`;

export const CoverDetails = styled.div`
  font-size: 12px;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  text-align: center;
  padding-top: 60vw;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: rgb(18, 18, 18) 0px -5px 5px inset;
  background-image: linear-gradient(rgba(18,18,18,0) 5vw,rgb(18,18,18) 120vw),
  linear-gradient(to left,rgba(18,18,18,0.7),rgba(18,18,18,0) 50%) ${prop => prop.img ? ',url(' + prop.img + ');': '' }
 @media ${responsive.tablet} {
    padding: 4rem;
    padding-top: 15rem;
    text-align: right;
    background-image: linear-gradient(
        rgba(18, 18, 18, 0) 10vw,
        rgb(18, 18, 18) 46.875vw
      ),
      linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%)
        ${prop => (prop.img ? ',url(' + prop.img + ');' : '')};
  }
  @media ${responsive.laptop} {
    font-size: 18px;
  }
`;

export const Title = styled.h1`
  line-height: 1.75;
  user-select: text;
  font-weight: bold;
  margin: 1rem  0;
  font-size: 1rem;
  display: block;
  @media ${responsive.tablet} {
    font-size: 2rem;
  }
`;

export const MovieInformationStyle = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 10px;
  justify-content: center;
  align-item: center;
  justify-content: center;
  margin-top: 2rem;

  @media ${responsive.tablet} {
    justify-content: flex-start;
    font-size: 14px;
  }
`;

export const MyBadge = styled.div`
  background-color: rgb(196,198,198);
  font-size: 11px;
  margin-left: 6px;
  @media ${responsive.mobileL} {
    margin-left: 10px;
  }
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 2px 5px;
  color: #39393a;
  font-weight: 500;
  @media ${responsive.tablet} {
    margin-left: 20px;

  }
`;

export const MyBadgeValue = styled.span`
  margin-left: 5px;
`;

export const Description = styled.div`
  vertical-align: middle;
  display: lock;
  font-weight: 100;
  line-height: 2;
  user-select: text;
  width: 100%;
  min-width: 300px;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 2rem;
  @media ${responsive.tablet} {
    width:40%;
    font-weight: 400;
  }
`;

export const ControlButton = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  @media ${responsive.tablet} {
    justify-content: unset;
  }

  button {
    margin:unset;
    margin-left: 1rem;
    padding: 0.625em;
  }
`;

export const GenresStyle =styled.div`
display: flex;
justify-content: center;
align-item: center;
font-size: small;
margin-bottom: 1rem;
& div {
  padding: 1rem;
}
@media ${responsive.tablet} {
  justify-content: flex-start;
}
`;

export const RangeAgeStyle = styled.div`
* {
  font-family: var(--primary-font) !important;
}
div {
  min-width: 50px;
  direction: ltr;
}
width: 50%;
margin: auto;
display: flex;
justify-content: center;
align-item: center;
padding-bottom:20px;
margin-bottom:1 rem;
z-index:2;

@media ${responsive.tablet} {
  justify-content: flex-start;
  margin-bottom: 2rem;
  margin: 0;
}

img {
  width: 50px;
}
img:nth-child(2) {
  margin-right:10px;
}
`;

export const MoreInfo =styled.div`

  @media ${responsive.tablet} {
    justify-content: flex-start;
    margin-bottom: 2rem;
    margin: 0;
  }
`;

export const MoreDetailInformation = styled.div`
  margin-bottom: 2rem;
`;

export const ReviewBlankLink = styled.a`
  display: inline-flex;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  
  font-size: 1rem;
  list-style-type: none;
  color: var(--primary-danger);
  :hover {
    color: var(--dim-blue);
  }
  font-weight: bold;
`;

export const ModalHead = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`;
export const WrapperModal = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

export const WrapperFavarite = styled.div`
  min-height: 20%;
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding-right: 1rem;
  padding-top: 0.4rem;
`;
export const ContainerBookmark = styled.div`
  padding-left: 1rem;
`;
export const ContainerFavarite = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
`;
export const WrapLike = styled.div`
  width: 40px;

  & img {
    filter: invert(100%);
  }
`;
export const WrapDislike = styled.div`
  width: 40px;
  padding-top: 0.4rem;
  & img {
    filter: invert(100%);
  }
`;

export const CommentBox = styled.article`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const SendComment=styled.img`
width:15px;
height:15px;
position:absolute;
left:1rem;
font-size: 0.75rem;
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 64px;
  border: 0px;
  outline: 0px;
  line-height: 2rem;
  font-size: 1.35rem;
  border-radius: 0.5em;
  padding: 0 3.5rem 0 4rem;
`;