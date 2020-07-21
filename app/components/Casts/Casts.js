import React from 'react';
import { FormattedMessage } from 'react-intl'

import messages from './messages';

import {
  SubTitle,
  Container,
  CastWrapper,
  Image,
  DescriptionCast,
  Title,
  Role,
} from './style';

const Casts = ({ casts, rols }) => {
  return (
    <CastWrapper>

       <SubTitle>
        <FormattedMessage {...messages.subtitle} />
      </SubTitle>

     
      {casts &&
        casts.length > 0 &&
        casts.map((cast, i) => (
          <Container key={i}>
            <Image>
              <img src={cast.profile_picture} />
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

export default Casts;
