import React, { useCallback } from 'react';
import Form from 'components/Form';
import { Button } from 'components/kit';
import InputField from '../EnterComment/component/InputField/InputField';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FormattedMessage } from 'react-intl';
import useMoviePageContext from 'containers/MoviesPage/context';
import { initialValues, validationSchema } from './form';
import messages from '../../messages';
import SEND from 'images/send.svg';
import IMG_COMMENT from 'images/imgcomment.svg';
import Img from 'react-cool-img';
import { ButtonsGroup, ErrorContainer, CommentBox, Imgprofile } from './styles';

const EnterComment = () => {
  const {
    data: { error_comment, loading_send_comment },
    actions = { handleSetComment },
  } = useMoviePageContext();

  const handleFormSubmit = (comment, { setFieldValue }) => {
    console.log(comment);

    actions.handleSetComment(comment);
    setFieldValue('comment', '');
  };

  const formProps = {
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  };

  return (
    <Form {...formProps}>
      <CommentBox>
        <Imgprofile>
          <img src={IMG_COMMENT} width="50" height="45" />
        </Imgprofile>
        <InputField
          type="text"
          name="comment"
          placeholder="نظرتان راجع به این فیلم چیست؟"
        />
        <ButtonsGroup>
          <button type="submit">
            <img src={SEND} width="30" height="25" />
          </button>
        </ButtonsGroup>

        {/* <SendComment
            src={SEND}
            width="30"
            height="25"
                    /> */}
      </CommentBox>

      {loading_send_comment && <span>در حال پردازش</span>}
      {error_comment && <ErrorContainer>{error_comment}</ErrorContainer>}
    </Form>
  );
};

export default EnterComment;
