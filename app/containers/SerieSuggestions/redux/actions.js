import  {ERROR,LOADING,GET_SUGGESTED_SERIES,UPDATE_SUGGESTED_SERIES} from './constants';

export function loadingAction(loadingStatus){
    return {
        type:LOADING,
        payload:{loadingStatus},
    };
}

export function errorAction(error){
    return {
        type:ERROR,
        payload:{error},
    };
}

export function getSuggestionSeriesAction({...options}){
    return {
        type:GET_SUGGESTED_SERIES,
        payload:{...options},
    };
}

export function updateSuggestionSeriesAction(data){
    return {
        type:UPDATE_SUGGESTED_SERIES,
        payload:data,
    };
}