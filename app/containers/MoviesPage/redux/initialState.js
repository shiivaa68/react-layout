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

  //commnet 
  //get comment
  error_comment: false,
  loading_comment: false,
  comment_movie: {},
  
//send comment
  error_comment:false,
  loading_send_comment:false,
  send_comment:{},

//SET LIKE
  error_movie_like:false,
  loading_movie_like:false,
  data_movie_like:{},

  //send reply comment
  error_reply_comment:false,
  loading_send_reply_comment:false,
  send_reply_comment:{},

    //commnet 
  //get reply comment more than 10
  error_comment_reply_more: false,
  loading_comment_reply_more: false,
  comment_movie_reply_more: {},

};



export default initialState;
