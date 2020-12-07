import { GET_TOP_RATED, GET_UPCOMING, GET_POPULAR, GET_GENRES } from "../../actions/actionTypes";

export const moviesTopRated = (state = [], action) => {
    switch(action.type){
        case GET_TOP_RATED:
            return action.payload;
        default:
            return state;
    }
}

export const moviesUpcoming = (state = [], action) => {
    switch(action.type){
        case GET_UPCOMING:
            return action.payload;
        default:
            return state;
    }
}

export const moviesPopular = (state = [], action) => {
    switch(action.type){
        case GET_POPULAR:
            return action.payload;
        default:
            return state;
    }
}

export const movieGenres = (state = [], action) => {
    switch(action.type){
        case GET_GENRES:
            return action.payload;
        default:
            return state;
    }
}