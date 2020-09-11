import React,{useCallback} from 'react';
import Form from 'components/Form';
import InputField  from '../EnterReplyComment/component/InputField';
import useMoviePageContext from 'containers/MoviesPage/context';
import { initialValues, validationSchema } from './form';
import SEND from 'images/send.svg';
import IMG_COMMENT from 'images/imgcomment.svg';
import Img from 'react-cool-img';
import {
  ButtonsGroup,
  ErrorContainer,
  CommentBox,
  Imgprofile,
  WrapperReply,
} from './styles';

const EnterReplyComment = () => {
  const {
    data: { activeCommentIdForReply },
    actions={handleSetReplyComment} ,
    
  } = useMoviePageContext();

  const handleFormSubmit = (comment,{ setFieldValue }) => {
    console.log(comment);

    actions.handleSetReplyComment({comment,activeCommentIdForReply});
    setFieldValue('comment', '');
  };


  // console.log(activeCommentIdForReply)
  const formProps = {
    initialValues,
    validationSchema,
    onSubmit:handleFormSubmit,
    // ()=>actions.handleSetReplyComment({activeCommentIdForReply,comment}) ,
  };


  return (
   <WrapperReply>
      <Form {...formProps}>
           <CommentBox>
             <Imgprofile><img src={IMG_COMMENT}
              width="50"
              height="45"/>
            </Imgprofile>
             <InputField
              type="text"
              name="comment"
              placeholder="نظرتان راجع به این فیلم چیست؟"
              
            />
            <ButtonsGroup>
            <button type="submit">
            <img
            src={SEND}
            width="30"
            height="25"
                    />
            </button>
            </ButtonsGroup>
          
            {/* <SendComment
            src={SEND}
            width="30"
            height="25"
                    /> */}

            </CommentBox>
   
          {/* {loading_send_comment && <span>در حال پردازش</span>}
          {error_comment && <ErrorContainer>{error_comment}</ErrorContainer>} */}

      </Form>
      </WrapperReply>
  );
};

export default EnterReplyComment;
