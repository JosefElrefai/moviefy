import { CHANGE_SRC } from '../actionTypes';

export const changeSRC = (src) => {
    return {
        type: CHANGE_SRC,
        payload: src
    };
};