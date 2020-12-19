import { GET_TV_LATEST, GET_TV_POPULAR, GET_TV_TOP_RATED } from '../actions/actionTypes';

export const TvTopRated = (state = [], action) => {
    switch(action.type){
        case GET_TV_TOP_RATED:
            return action.payload;
        default:
            return state;
    }
}

export const TvLatest = (state = [], action) => {
    switch(action.type){
        case GET_TV_LATEST:
            return action.payload;
        default:
            return state;
    }
}

export const TvPopular = (state = [], action) => {
    switch(action.type){
        case GET_TV_POPULAR:
            return action.payload;
        default:
            return state;
    }
}