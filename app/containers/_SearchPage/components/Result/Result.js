import React,{useMemo} from 'react';
import useSearchContext from 'containers/SearchPage/context';
import { useSelector } from 'react-redux';
import { MovieItem } from 'components/kit';
import Casts from 'components/Casts';
import ResultControl from './ResultControl';
import SEARCH_TYPES from 'constants/SearchTypes';


import { ResultWrapper, SearchMovieLayout,SearchMovieWrapper,SearchSeriesLayout,SearchSeriesWrapper,CastWrapper,Container,Image,DescriptionCast,Title} from './styles';

const Result = () => {

 const { rols = [] } = useSelector(state => state.global);
  const {
    data: { movies_data, series_data, casts_data },
  } = useSearchContext();

  const searchTypes = useMemo(() => {
    return [
      { id: 1, name: SEARCH_TYPES.ALL, label: 'همه' },
      { id: 2, name: SEARCH_TYPES.MOVIES, label: 'فیلم ها' },
      { id: 3, name: SEARCH_TYPES.SERIES, label: 'سریال ها' },
      { id: 4, name: SEARCH_TYPES.CASTS, label: 'عوامل' },
    ];
  }, []);

  /** handlers */
  // const activeSeasonEpisodes = useMemo(() => {
  //   const result =
  //     data &&
  //     data.seasons &&
  //     data.seasons.length > 0 &&
  //     data.seasons.filter(season => season.id === activeSeasonId)[0];

  //   return result && result.episodes.length > 0 ? result.episodes : [];
  // }, [data, activeSeasonId]);


  // const handleSetActiveSeason = useCallback(
  //   selectedId => {
  //     setActiveSeasonId(selectedId);
  //   },
  //   [activeSeasonId, setActiveSeasonId],
  // );


  return (
    <ResultWrapper>
{/* < ResultControl
        activeSeasonId={activeSeasonId}
        searchTypes={data.movies_data}
        handleSetActiveSeason={handleSetActiveSeason}

/> */}

        <SearchMovieLayout>
          <SearchMovieWrapper>
            {movies_data &&
              movies_data.length > 0 &&
              movies_data.map(item => <MovieItem key={item.id} {...item} />)}
          </SearchMovieWrapper>
          </SearchMovieLayout>


          <SearchSeriesLayout>
          <SearchSeriesWrapper>
          {series_data &&
          series_data.length > 0 &&
          series_data.map(item => <MovieItem key={item.id} {...item} />)}
          </SearchSeriesWrapper>
          </SearchSeriesLayout>

              <CastWrapper>
              {casts_data &&
              casts_data.length > 0 &&
              casts_data.map((cast, i) => (
                <Container key={i}>
                  <Image>
                    <img src={cast.profile_picture} />
                  </Image>
                  <DescriptionCast>
                    <Title>{cast.fullname_fa}</Title>
                  </DescriptionCast>
                </Container>
              ))}
              </CastWrapper>

        
    </ResultWrapper>
  );
};

export default Result;