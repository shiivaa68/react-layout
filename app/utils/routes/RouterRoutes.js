// this file is being used for routing system

const RouterRoutes = {
  login: '/auth/login',
  register: '/auth/register',

  home: '/',

  junk: '/junk',
  search: '/search',
  movieDetailRoute: '/movies/:movieId',
  seriesDetailRoute: '/series/:serieId',
  listViewRoute: '/videos',
  pageSingle: '/page/:pageId',
};

export default RouterRoutes;
