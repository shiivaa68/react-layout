/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Login from 'containers/Login/Loadable';
import JunkPage from 'containers/JunkPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ListViewPage from 'containers/ListViewPage/Loadable';
import MoviesPage from 'containers/MoviesPage/Loadable';
import SeriesPage from 'containers/SeriesPage/Loadable';
import SinglePage from 'containers/SinglePage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
import PackagesPage from 'containers/PackagesPage/Loadable';
import PackageDetails from 'containers/PackageDetails/Loadable';
// import CrewPage from 'containers/CrewPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import TermsPage from 'containers/TermsPage/Loadable';

import { HeaderMenus, FooterMenus } from 'routes';
import { RouterRoutes } from 'utils/routes';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import GlobalReducer from './reducer';
import GlobalSaga from './saga';
import {
  getRolesAction,
  getLanguagesAction,
  getAgeRangeAction,
  getGenresAction,
  getCountryAction,
} from './actions';
import { updateStepAction } from '../Login/redux/actions';

import { AppWrapper, MainWrapper } from './stylecomponent';
import { Header, Footer } from './component';
import { PublicRoute, PrivateRoute } from './component/Router';

import GlobalTheme from '../../global-css-theme';
import GlobalStyle from '../../global-styles';
import '../../font_icon.css';
import '../../font_vazir.css';
import '../../react-id-swiper.css';

import { MenuContext, AuthContext } from './context';
import AuthManager from './AuthManager';

const globalKeyOnRedux = 'global';

export default function App() {
  useInjectReducer({ key: globalKeyOnRedux, reducer: GlobalReducer });
  useInjectSaga({ key: globalKeyOnRedux, saga: GlobalSaga });

  const AuthData = AuthManager();

  const [
    getRoles,
    getLanguages,
    getAgeRange,
    getGenres,
    getCountry,
    updateStep,
  ] = useBindDispatch([
    getRolesAction,
    getLanguagesAction,
    getAgeRangeAction,
    getGenresAction,
    getCountryAction,
    updateStepAction,
  ]);

  useEffect(() => {
    getRoles();
    getLanguages();
    getAgeRange();
    getGenres();
    getCountry();
  }, []);

  return (
    <AuthContext.Provider value={{ ...AuthData }}>
      <MenuContext.Provider
        value={{ HeaderMenus, FooterMenus, actions: { updateStep } }}
      >
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
              <PublicRoute
                exact
                path={RouterRoutes.home}
                component={JunkPage}
              />
              {/* <PublicRoute
                path={RouterRoutes.terms}
                component={TermsPage}
              /> */}
              <PublicRoute path={RouterRoutes.junk} component={HomePage} />
              <PublicRoute
                path={RouterRoutes.listViewRoute}
                component={ListViewPage}
              />
              <PublicRoute
                path={RouterRoutes.movieDetailRoute}
                component={MoviesPage}
              />
              <PublicRoute
                path={RouterRoutes.seriesDetailRoute}
                component={SeriesPage}
              />
              <PublicRoute
                path={RouterRoutes.pageSingle}
                component={SinglePage}
              />
              <PublicRoute path={RouterRoutes.search} component={SearchPage} />
              <PublicRoute
                path={RouterRoutes.package}
                component={PackagesPage}
              />
              <PrivateRoute
                path={RouterRoutes.packageDetailsRoute}
                component={PackageDetails}
              />
              {/* <PublicRoute
                path={RouterRoutes.castDetailsRoute}
                component={CrewPage}
              /> */}

              <PublicRoute path={RouterRoutes.auth} component={Login} />

              <PublicRoute component={NotFoundPage} />
            </Switch>
          </MainWrapper>

          <Footer />
          <GlobalTheme />
          <GlobalStyle />
        </AppWrapper>
      </MenuContext.Provider>
    </AuthContext.Provider>
  );
}
