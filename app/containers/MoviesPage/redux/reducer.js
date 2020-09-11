import produce from 'immer';
import initialState from './initialState';
import {
  ERROR,
  LOADING,
  UPDATE_MOVIEPAGE,
  ERROR_MOVIE,
  LOADING_MOVIE,
  UPDATE_AWARD_MOVIEPAGE,
  ERROR_MOVIE_RANK,
  UPDATE_MOVIE_RANK_REDUCER,
  LOADING_MOVIE_RANK,
  ERROR_MOVIE_BOOKMARK_DELET,
  LOADING_MOVIE_BOOKMARK_DELET,
  UPDATE_BOOKMARK_MOVIEPAGE_DELET,
  ERROR_MOVIE_BOOKMARK,
  UPDATE_BOOKMARK_MOVIEPAGE,
  LOADING_MOVIE_BOOKMARK,
  ERROR_MOVIE_COMMENT,
  UPDATE_COMMENT_MOVIES,
  LOADING_MOVIE_COMMENT,
  ERROR_MOVIE_COMMENT_SEND,
  LOADING_MOVIE_COMMENT_SEND,
  UPDATE_COMMENT_MOVIES_SEND,
  ERROR_MOVIE_LIKE,
  LOADING_MOVIE_LIKE,
  UPDATE_MOVIE_LIKE,
  ERROR_MOVIE_COMMENT_SEND_REPLY,
  LOADING_MOVIE_COMMENT_SEND_REPLY,
  UPDATE_COMMENT_MOVIES_SEND_REPLY,
  ERROR_MOVIE_COMMENT_REPLY_MORE,
  LOADING_MOVIE_COMMENT_REPLY_MORE,
  UPDATE_COMMENT_MOVIES_REPLY_MORE,
  UPDATE_COMMENT_REPLY_LIKE,
} from './constants';

const MoviesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERROR:
        draft.error = action.payload.error.message;
        return draft;

      case LOADING:
        draft.loading = action.payload.loadingStatus;
        return draft;

      case UPDATE_MOVIEPAGE:
        draft.data = action.payload;
        return draft;

      case ERROR_MOVIE:
        draft.error_movie = action.payload.error.message;
        return draft;

      case LOADING_MOVIE:
        draft.loading_movie = action.payload.loadingStatus;
        return draft;

      case UPDATE_AWARD_MOVIEPAGE:
        draft.data_movie = action.payload;
        return draft;

      case UPDATE_MOVIEPAGE:
        draft.data = action.payload;
        return draft;

      case UPDATE_MOVIE_RANK_REDUCER:
        draft.data.epizod_rank = action.payload.new_epizod_rank;
        draft.data.user_rank = action.payload.rank;
        return draft;

      //BOOKMAR
      // case ERROR_MOVIE_BOOKMARK:
      //   draft.error_movie_bookmark = action.payload.error.message;
      //   return draft;

      // case LOADING_MOVIE_BOOKMARK:
      //   draft.loading_movie_bookmark = action.payload.loadingStatus;
      //   return draft;

      case UPDATE_BOOKMARK_MOVIEPAGE:
        draft.data.user_favorite = action.payload;
        return draft;

      //DELETE BOOKMARK

      // case ERROR_MOVIE_BOOKMARK_DELET:
      //   draft.error_movie_bookmark_remove = action.payload.error.message;
      //   return draft;

      // case LOADING_MOVIE_BOOKMARK_DELET:
      //   draft.loading_movie_bookmark_remove = action.payload.loadingStatus;
      //   return draft;

      case UPDATE_BOOKMARK_MOVIEPAGE_DELET:
        draft.data.user_favorite = action.payload;
        return draft;

      //COMMENT MOVIE
      case ERROR_MOVIE_COMMENT:
        draft.error_comment = action.payload.error.message;
        return draft;

      case LOADING_MOVIE_COMMENT:
        draft.loading_comment = action.payload.loadingStatus;
        return draft;

      case UPDATE_COMMENT_MOVIES:
        draft.comment_movie = action.payload;
        return draft;

      //COMMENT SEND
      case ERROR_MOVIE_COMMENT_SEND:
        draft.error_comment = action.payload.error.message;
        return draft;

      case LOADING_MOVIE_COMMENT_SEND:
        draft.loading_send_comment = action.payload.loadingStatus;
        return draft;

      case UPDATE_COMMENT_MOVIES_SEND:
        draft.send_comment = action.payload;
        return draft;
      //LIKE

      case ERROR_MOVIE_LIKE:
        draft.error_movie_like = action.payload.error.message;
        return draft;

      case LOADING_MOVIE_LIKE:
        draft.loading_movie_like = action.payload.loadingStatus;
        return draft;

      case UPDATE_MOVIE_LIKE: {
        const { commentId, comment_score, score } = action.payload;

        const targetIndex = draft.comment_movie.findIndex(
          comment => comment.id === commentId,
        );

        draft.comment_movie[targetIndex].score = comment_score;
        draft.comment_movie[targetIndex].your_score = Number(score);

        return draft;
      }

      //COMMENT  REPLY SEND
      case ERROR_MOVIE_COMMENT_SEND_REPLY:
        draft.error_reply_comment = action.payload.error.message;
        return draft;

      case LOADING_MOVIE_COMMENT_SEND_REPLY:
        draft.loading_send_reply_comment = action.payload.loadingStatus;
        return draft;

      case UPDATE_COMMENT_MOVIES_SEND_REPLY:
        draft.send_reply_comment = action.payload;
        return draft;
      //GET REPLY MORE COMMENT
      //COMMENT MOVIE
      case ERROR_MOVIE_COMMENT_REPLY_MORE:
        draft.error_comment_reply_more = action.payload.error.message;
        return draft;

      case LOADING_MOVIE_COMMENT_REPLY_MORE:
        draft.loading_comment_reply_more = action.payload.loadingStatus;
        return draft;

      case UPDATE_COMMENT_MOVIES_REPLY_MORE: {
        const { commentId, result } = action.payload;

        const targetIndex = draft.comment_movie.findIndex(
          comment => comment.id === commentId,
        );

        draft.comment_movie[targetIndex].replies = [
          ...draft.comment_movie[targetIndex].replies,
          ...result,
        ];

        return draft;
      }

      case UPDATE_COMMENT_REPLY_LIKE: {
        const { commentId, replyId, comment_score, score } = action.payload;

        const targetCommentIndex = draft.comment_movie.findIndex(
          comment => comment.id === commentId,
        );

        const targetReplyIndex = draft.comment_movie[
          targetCommentIndex
        ].replies.findIndex(reply => reply.id === replyId);

        draft.comment_movie[targetCommentIndex].replies[
          targetReplyIndex
        ].score = comment_score;
        draft.comment_movie[targetCommentIndex].replies[
          targetReplyIndex
        ].your_score = Number(score);

        return draft;
      }
    }
  });

export default MoviesPageReducer;
