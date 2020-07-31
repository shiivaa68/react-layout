import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl'
import Button from '../../../../../components/kit/Button';

import messages from './messages';


import { ButtonWrapper,ButtonControl } from './styles';


const ResultControl = ( {searchTypes=[],handleSetActiveType, activeTypeId}) =>
 {
 
  return (
    <ButtonWrapper>
    <ButtonControl>
    {searchTypes.length > 0 &&
          searchTypes.map(TypeSe => (
            <Button
              key={TypeSe.name}
              type="fullfill"
              keepActive={activeTypeId === TypeSe.id}
              label={TypeSe.label}
              onClick={() => handleSetActiveType(TypeSe.id)}
            />
          ))}
          
    </ButtonControl>
   
     </ButtonWrapper>
  );
};

export default ResultControl;

