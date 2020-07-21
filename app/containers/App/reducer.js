
import produce from 'immer';
import initialState from './initialState';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR, UPDATE_ROLES ,UPDATE_LANGUAGES,UPDATE_AGERANGE,UPDATE_GENRES,UPDATE_COUNTRY} from './constants';

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case UPDATE_ROLES:
        draft.rols = action.payload.data;
        return draft;

       case UPDATE_LANGUAGES:
         draft.languages =action.payload.data;
         return draft; 
         case UPDATE_AGERANGE:
           draft.agerange = action.payload.data;
           return draft;

       case UPDATE_GENRES:
         draft.genres = action.payload.data;
         return draft;   
         
       case UPDATE_COUNTRY:
         draft.country =action.payload.data;
         return draft;  
    }
  });

export default appReducer;