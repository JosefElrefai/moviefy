import { EDIT_ACTIVE_INDEX } from '../../actions/actionTypes';

export const activeIndex = (state = 0, action) => {
    switch(action.type){
        case EDIT_ACTIVE_INDEX:
            return action.payload;
        default:
             return state;
    }
}