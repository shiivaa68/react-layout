import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import {
  WrapperTitle,
  ModalHeader,
  ModalCloseButton,
  ModalContainer,
} from './styles';

const MyModal = ({ isShowing, hide,data_movie,data_awards }) => {
  return isShowing ? (
  <ModalContainer
  isOpen={isShowing}
          onBackgroundClick={hide}
          onEscapeKeydown={hide} >
    <div >
      <ModalCloseButton type="button" onClick={hide}>
        <span >&times;</span>
      </ModalCloseButton>
    </div>
    <ModalHeader>
    <FormattedMessage {...messages.awards} />
    </ModalHeader>
   
    {data_movie &&data_movie.map(award=><WrapperTitle>{award.title}</WrapperTitle>) }
    {data_awards &&data_awards.map(award=><WrapperTitle>{award.title}</WrapperTitle>) }

  </ModalContainer>

) : null;}


export default MyModal;