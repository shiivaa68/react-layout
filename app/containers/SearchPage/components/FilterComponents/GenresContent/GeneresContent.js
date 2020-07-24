import React, { useEffect } from 'react';
import useSearchContext from 'containers/SearchPage/context';
import { GenresWrapper } from './styles';
import { Checkbox } from 'components/kit';

const GenerseContent = () => {
  const {
    data: { genres },
    action: { handleSetSelectedGenres },
  } = useSearchContext();

  return (
    <GenresWrapper>
      {genres.map(gnr => (
        <Checkbox
          key={gnr.id}
          id={gnr.id}
          label={gnr.name}
          onChange={handleSetSelectedGenres}
        />
      ))}
    </GenresWrapper>
  );
};

export default GenerseContent;
