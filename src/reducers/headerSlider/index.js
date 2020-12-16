import { EDIT_H_ACTIVE_INDEX, EDIT_H_MOVIES_COUNT } from '../../actions/actionTypes';

export const headerActiveIndex = (state = 0, action) => {
    switch(action.type){
        case EDIT_H_ACTIVE_INDEX:
            return action.payload;
        default:
             return state;
    }
}

export const headerMoviesCount = (state = null, action) => {
    switch (action.type) {
        case EDIT_H_MOVIES_COUNT:
            return action.payload;
        default:
            return state;
    }
}