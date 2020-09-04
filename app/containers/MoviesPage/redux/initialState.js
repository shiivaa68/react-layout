const initialState = {
  error: false,
  loading: false,
  data: {},

  error_movie:false,
  loading_movie:false,
  data_movie:{},

  // add favarite
  error_movie_favarite:false,
  loading_movie_favarite:false,
  data_movie_favarite:{},

  // add bookmark
  error_movie_bookmark:false,
  loading_movie_bookmark:false,
  data_movie_bookmark:{},

  //delete bookmark
  error_movie_bookmark_remove:false,
  loading_movie_bookmark_remove:false,
  data_movie_bookmark_remove:{},
};

export default initialState;
