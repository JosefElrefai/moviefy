import { GET_M_TOP_RATED, GET_M_UPCOMING, GET_M_POPULAR, GET_M_NOW_PLAYING, GET_M_GENRES } from "../actions/actionTypes";

export const moviesTopRated = (state = [], action) => {
    switch(action.type){
        case GET_M_TOP_RATED:
            return action.payload;
        default:
            return state;
    }
}

export const moviesUpcoming = (state = [], action) => {
    switch(action.type){
        case GET_M_UPCOMING:
            return action.payload;
        default:
            return state;
    }
}
export const moviesNowPlaying = (state = [], action) => {
    switch(action.type){
        case GET_M_NOW_PLAYING:
            return action.payload;
        default:
            return state;
    }
}

export const moviesPopular = (state = [], action) => {
    switch(action.type){
        case GET_M_POPULAR:
            return action.payload;
        default:
            return state;
    }
}

export const movieGenres = (state = [], action) => {
    switch(action.type){
        case GET_M_GENRES:
            return action.payload;
        default:
            return state;
    }
}