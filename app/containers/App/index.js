/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React ,{useEffect}from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import ListViewPage from 'containers/ListViewPage/Loadable';
import MoviesPage from 'containers/MoviesPage/Loadable';
import SeriesPage from 'containers/SeriesPage/Loadable';
import SinglePage from 'containers/SinglePage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import JunkPage from 'containers/JunkPage/Loadable';

import { HeaderMenus, FooterMenus } from 'routes';
import { RouterRoutes } from 'utils/routes';


import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import GlobalReducer from './reducer';
import GlobalSaga from './saga';
import { getRolesAction ,getLanguagesAction,getAgeRangeAction,getGenresAction,getCountryAction} from './actions';


import { AppWrapper, MainWrapper } from './stylecomponent';
import { Header, Footer } from './component';

import GlobalTheme from '../../global-css-theme';
import GlobalStyle from '../../global-styles';
import '../../font_icon.css';
import '../../font_vazir.css';
import '../../react-id-swiper.css';

import { MenuContext } from './context';

const globalKeyOnRedux = 'global';

export default function App() {

  useInjectReducer({ key: globalKeyOnRedux, reducer: GlobalReducer });
  useInjectSaga({ key: globalKeyOnRedux, saga: GlobalSaga });

  const [getRoles] = useBindDispatch([getRolesAction]);
  const [getLanguages] = useBindDispatch([getLanguagesAction]);
  const [getAgeRange] = useBindDispatch([getAgeRangeAction]);
  const [getGenres] = useBindDispatch([getGenresAction]);
  const [getCountry] = useBindDispatch([getCountryAction]);

  useEffect(() => {
    getRoles();
    getLanguages();
    getAgeRange();
    getGenres();
    getCountry();
  }, []);

  
  return (
    <MenuContext.Provider value={{ HeaderMenus, FooterMenus }}>
       
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header />

        <MainWrapper>
          <Switch>
            <Route exact path={RouterRoutes.home} component={JunkPage} />
            <Route path={RouterRoutes.junk} component={HomePage} />
            <Route path={RouterRoutes.listViewRoute} component={ListViewPage} />
            <Route
              path={RouterRoutes.movieDetailRoute}
              component={MoviesPage}
            />
            <Route
              path={RouterRoutes.seriesDetailRoute}
              component={SeriesPage}
            />
               <Route path={RouterRoutes.pageSingle} component={SinglePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </MainWrapper>

        <Footer />
        <GlobalTheme />
        <GlobalStyle />
      </AppWrapper>
    
    </MenuContext.Provider>
  );
}
