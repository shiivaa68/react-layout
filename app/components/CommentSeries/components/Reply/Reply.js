import React,{useCallback } from 'react';
import  FAVARITE from 'images/favorite.svg';
import FAVARITE_BORDER from 'images/favorite_border.svg';
import REPLY from 'images/reply.svg';
import Img from 'react-cool-img';

import useSeriesPageContext from 'containers/SeriesPage/context';
import { ReplyWrapper,Container,Wrapper,Image,Description,Favorite,Text,Desuser} from './styles';


const Reply = ({ 
    id,
    avatar,
    comment,
    created_date,
    display_name,
    has_replay,
    your_score,
    score,

}) => {

  const {
    data,
    actions: {handleSeriesLikeComment },
  } = useSeriesPageContext() || {data:{}};


  const handleSeriesLike = useCallback(
    likeType => {
          if (likeType === 'LIKE') handleSeriesLikeComment({id,score: "false"});
          else if (likeType === 'DISLIKE') handleSeriesLikeComment({id, score:"true"});
          // console.log({score},'comment page')
    },
    [],
  );


    return(
     <ReplyWrapper>
          <Container>
        <Image>
          <Img src={avatar} />
          </Image>
           <Description>
           <Desuser>
            <span>{display_name}</span> 
            <span>{created_date}</span>
            </Desuser>
            <Text>
              {comment}
              </Text>
            </Description>
            <Favorite>
         <div>
         {!data.your_score ? (<div onClick={()=>handleSeriesLike('LIKE')}> <Img
            src={FAVARITE}
            width="30"
            height="25"
          /></div>
       
          ) :(<div  onClick={()=>handleSeriesLike('DISLIKE')}> 
          <Img
            src={ FAVARITE_BORDER}
            width="30"
            height="25"
          />
          </div>
         
          )}

        </div>
        <div>
        <span>{score}</span>

        </div>
       </Favorite>
         </Container>
     </ReplyWrapper>
    );
};

export default Reply;
