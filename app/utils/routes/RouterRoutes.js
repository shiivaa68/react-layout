// this file is being used for routing system

const RouterRoutes = {
  auth: '/auth/login',
  home: '/',
  junk: '/junk',
  search: '/Search',
  movieDetailRoute: '/movies/:movieId',
  seriesDetailRoute: '/series/:serieId',
  listViewRoute: '/videos',
  terms: '/terms',
  pageSingle: '/page/:pageId',
  package: '/packages',
  packageDetailsRoute: '/order/:id',
  castDetailsRoute: '/crew/:id',
};

export default RouterRoutes;
