import React from 'react';
import useSearchContext from 'containers/SearchPage/context';
import { GenresWrapper } from './styles';
import { Checkbox } from 'components/kit';

const GenerseContent = () => {
  const {
    data: { genres, selectedGenres },
    action: { handleSetSelectedGenres },
  } = useSearchContext();

  return (
    <GenresWrapper>
      {genres.map(gnr => (
        <Checkbox
          key={gnr.id}
          id={gnr.id}
          label={gnr.name}
          checked={selectedGenres.map(el => el.id).includes(gnr.id)}
          onChange={handleSetSelectedGenres}
        />
      ))}
    </GenresWrapper>
  );
};

export default GenerseContent;
