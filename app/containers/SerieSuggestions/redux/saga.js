import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import {GET_SUGGESTED_SERIES} from './constants';
import {errorAction,loadingAction,updateSuggestionSeriesAction} from './actions';



function* getSuggestedSeriesWorker({payload:{serieId,options}}){
const url = apiEndpoints.getSuggestedSeries(serieId,options);
const method = 'GET';
const actions ={
    loading:loadingStatus => loadingAction(loadingStatus),
    success:result =>updateSuggestionSeriesAction(result),
    failure:error => errorAction(error),

};
yield requestCall({url,method,actions});
}

export default function* SuggestedSeriesPageSaga(){
    yield all([takeLatest(GET_SUGGESTED_SERIES,getSuggestedSeriesWorker)]);
}