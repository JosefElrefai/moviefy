import { EDIT_ACTIVE_INDEX } from '../actionTypes';

export const changeActiveIndex = (activeIndex) => {
    return {
        type: EDIT_ACTIVE_INDEX,
        payload: activeIndex
    }
} 