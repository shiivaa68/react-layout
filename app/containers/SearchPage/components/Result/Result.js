import React from 'react';
import useSearchContext from 'containers/SearchPage/context';
import { MovieItem } from 'components/kit';
import { Casts } from 'components/Casts';

import { ResultWrapper } from './styles';

const Result = () => {
  const {
    data: { movies_data, series_data, casts_data },
  } = useSearchContext();

  return (
    <ResultWrapper>
      <div>
        {/* <pre>{JSON.stringify(movies_data, null, 2)}</pre> */}
        {movies_data.length > 0 &&
          movies_data.map(item => <MovieItem key={item.id} {...item} />)}
      </div>
      <div>
        {/* <pre>{JSON.stringify(series_data, null, 2)}</pre> */}
        {series_data.length > 0 &&
          series_data.map(item => <MovieItem key={item.id} {...item} />)}
      </div>
      <div>
        <pre>{JSON.stringify(casts_data, null, 2)}</pre>
        {/* {casts_data.length > 0 &&
          casts_data.map(item => <Casts key={item.id} {...item} />)} */}
      </div>
    </ResultWrapper>
  );
};

export default Result;
