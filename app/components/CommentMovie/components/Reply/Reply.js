import React,{useCallback } from 'react';
import  FAVARITE from 'images/favorite.svg';
import FAVARITE_BORDER from 'images/favorite_border.svg';
import REPLY from 'images/reply.svg';
import Img from 'react-cool-img';

import useMoviePageContext from 'containers/MoviesPage/context';
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
        actions: {handleMovieLikeComment },
      } = useMoviePageContext() || {data:{}};
    
    
      const handlelikeMovieClick = useCallback(
        likeType => {
              if (likeType === 'LIKE') handleMovieLikeComment({id,score: "false"});
              else if (likeType === 'DISLIKE') handleMovieLikeComment({id, score:"true"});
            //   console.log({id},'comment page')
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
         {!data.your_score ? (<div onClick={()=>handlelikeMovieClick('LIKE')}> <Img
            src={FAVARITE}
            width="30"
            height="25"
          /></div>
       
          ) :(<div  onClick={()=>handlelikeMovieClick('DISLIKE')}> 
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
