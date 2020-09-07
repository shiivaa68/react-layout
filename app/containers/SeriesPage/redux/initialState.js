const initialState = {
  error: false,
  loading: false,
  data: {},

  error_awards: false,
  loading_awards: false,
  data_awards: {},
//FAVARITE
  error_favarite_series: false,
  loading_favarite_series: false,
  data_favarite_series: {},

  //BOOKMARK
  error_bookmark_series: false,
  loading_bookmark_series: false,
  data_bookmark_series: {},

  //DELETE BOOKMARK
  error_bookmark_series_del: false,
  loading_bookmark_series_del: false,
  data_bookmark_series_del: {},
  //comment
  error_comment: false,
  loading_comment: false,
  comment_series: {},

  //send comment
  error_comment:false,
  loading_send_comment:false,
  send_comment:{},

  //SET LIKE
  error_series_like:false,
  loading_series_like:false,
  data_series_like:{},
};

export default initialState;
