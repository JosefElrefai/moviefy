import { EDIT_H_ACTIVE_INDEX, EDIT_H_MOVIES_COUNT, EDIT_H_TRANSLATE_V } from './actionTypes';

export const changeHActiveIndex = (activeIndex) => {
    return {
        type: EDIT_H_ACTIVE_INDEX,
        payload: activeIndex
    }
} 

export const setHMoviesCount = (count) => {
    return {
        type: EDIT_H_MOVIES_COUNT,
        payload: count
    }
}

export const changeHSliderTranslate = (value) => {
    return {
        type: EDIT_H_TRANSLATE_V,
        payload: value
    }
}