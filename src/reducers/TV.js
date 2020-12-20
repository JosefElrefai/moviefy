import { GET_TV_POPULAR, GET_TV_TOP_RATED, GET_TV_GENRES, GET_TV_AIRING_TODAY, GET_TV_ON_AIR } from '../actions/actionTypes';

export const TvAiringToday = (state = [], action) => {
    switch(action.type){
        case GET_TV_AIRING_TODAY:
            return action.payload;
        default:
            return state;
    }
}

export const TvOnAir = (state = [], action) => {
    switch(action.type){
        case GET_TV_ON_AIR:
            return action.payload;
        default:
            return state;
    }
}

export const TvTopRated = (state = [], action) => {
    switch(action.type){
        case GET_TV_TOP_RATED:
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

export const TvGenres = (state = [], action) => {
    switch (action.type) {
        case GET_TV_GENRES:
            return action.payload;
        default:
            return state;
    }
}