import React, { useCallback,useMemo } from 'react';

import Reply from './components/Reply';
import Img from 'react-cool-img';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LIKE_FILL from 'images/like-fill.svg';
import LIKE_STROKE from 'images/like-stroke.svg';
import  FAVARITE from 'images/favorite.svg';
import FAVARITE_BORDER from 'images/favorite_border.svg';
import REPLY from 'images/reply.svg';
import { CommentWrapper, Container, Image, Description ,Text,Favorite,Desuser} from './styles';

import useSeriesPageContext from 'containers/SeriesPage/context';

const CommentSeries = ({
  id,
  avatar,
  comment,
  created_date,
  display_name,
  has_replay,
  your_score,
  score,
  replies,
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


  const isUserlike = useMemo(() => {
    if (data.your_score === null) return false;
    if (data.your_score === true) return true;
    else return false;
  }, [data]);

  const isUserDislike = useMemo(() => {
    if (data.your_score === null) return false;
    if (data.your_score === false ) return true;
    else return false;
  }, [data]);
  

  return (
    <CommentWrapper>
      <Container>
        <Image>
          <Img src={avatar} />
          </Image>
           <Description>
           <Desuser>
             <span>{display_name}</span> -
              <span>{created_date}</span>
             </Desuser>
             <Text>
              {comment}
              </Text>
              <div>
              {replies.length > 0 &&replies.map(reply => (
         <Reply key={reply.id} {...reply}/>

           )) }
              </div>
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
        <div>
        <Img
          src={REPLY}
            width="20"
            height="20"
          />
        </div>

       </Favorite>
         </Container>
    
    </CommentWrapper>
     
  );
};

export default CommentSeries;
