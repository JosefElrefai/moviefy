import { GET_DISCOVER } from '../actions/actionTypes';

export const discoverMovies = (state = [], action) => {
    switch(action.type){
        case GET_DISCOVER:
            return action.payload;
        default:
            return state;
    }
}