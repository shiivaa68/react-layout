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

import HomePage from 'containers/HomePage/Loadable';
import MoviesPage from 'containers/MoviesPage/Loadable';
import SeriesPage from 'containers/SeriesPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ListViewPage from 'containers/ListViewPage/Loadable';
import JunkPage from 'containers/JunkPage/Loadable';
import { HeaderMenus, FooterMenus } from 'routes';
import { AppWrapper, MainWrapper } from './stylecomponent';
import { Header, Footer } from './component';
import { RouterRoutes } from 'utils/routes';
import SimpleReactLightbox from 'simple-react-lightbox';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import GlobalReducer from './reducer';
import GlobalSaga from './saga';
import { getRolesAction } from './actions';

import GlobalTheme from '../../global-css-theme';
import GlobalStyle from '../../global-styles';
import '../../font_icon.css';
import '../../font_vazir.css';
import '../../react-id-swiper.css';

import { MenuContext } from './context';

const globalKeyOnRedux = 'global';

export default function App() {
  /** injectors */
  useInjectReducer({ key: globalKeyOnRedux, reducer: GlobalReducer });
  useInjectSaga({ key: globalKeyOnRedux, saga: GlobalSaga });

  const [getRoles] = useBindDispatch([getRolesAction]);

  useEffect(() => {
    console.log('APP_MOUNTED');
    getRoles();
  }, []);

  return (
    <MenuContext.Provider value={{ HeaderMenus, FooterMenus }}>
      <SimpleReactLightbox>
        <AppWrapper>
          <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
            <meta name="description" content="A React.js Boilerplate application" />
          </Helmet>
          <Header />

          <MainWrapper>
            <Switch>
              <Route exact path={RouterRoutes.home} component={JunkPage} />
              <Route path={RouterRoutes.junk} component={HomePage} />
              <Route path={RouterRoutes.movieDetailRoute} component={MoviesPage} />
              <Route path={RouterRoutes.serieDetailRoute} component={SeriesPage} />
              <Route path={RouterRoutes.listViewRoute} component={ListViewPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </MainWrapper>

          <Footer />
          <GlobalTheme />
          <GlobalStyle />
        </AppWrapper>
      </SimpleReactLightbox>
    </MenuContext.Provider>
  );
}
