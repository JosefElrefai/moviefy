import { CHANGE_SRC } from '../actions/actionTypes';

export const SRC = (state = 'movies', action) => {
    switch (action.type) {
        case CHANGE_SRC:
            return action.payload;    
        default:
            return state;
    }
}