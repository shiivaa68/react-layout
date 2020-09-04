import React,{useCallback} from 'react';
import { FormattedMessage } from 'react-intl'
import { withRouter } from 'react-router-dom';
import {PublicRoutes} from 'utils/routes';
import messages from './messages';
import Img from 'react-cool-img';

import {
  SubTitle,
  Container,
  CastWrapper,
  Image,
  DescriptionCast,
  Title,
  Role,
} from './style';

const Casts = ({ casts, rols ,history}) => {
  const {push} = history;

  return (
     <CastWrapper>
       <SubTitle>
        <FormattedMessage {...messages.subtitle} />
      </SubTitle>
      {casts &&
        casts.length > 0 &&
        casts.map((cast, i) => (
         
          <Container key={i} >
            <Image onClick={ ()=> push(PublicRoutes.castDetailsRoute(cast.cast_id))}>
              <Img src={`${cast.profile_picture}?size=100x100`} />
            </Image>
            <DescriptionCast>
              <Title>{cast.fullname_fa}</Title>
              <Role>{rols.length > 0 && rols.find(rol => rol.id === cast.role).fa}</Role>
            </DescriptionCast>
          </Container>

        ))}
    </CastWrapper>
  );
};

export default withRouter(Casts);
