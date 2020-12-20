import { GET_TV_POPULAR, GET_TV_TOP_RATED, GET_TV_GENRES, GET_TV_AIRING_TODAY, GET_TV_ON_AIR } from './actionTypes';
import movieDB from '../apis/movieDB';

export const fetchTvAiringToday = () => async (dispatch) => {
    const resp = await movieDB.get('/tv/airing_today', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });

    dispatch({ type: GET_TV_AIRING_TODAY, payload: resp.data.results });
}

export const fetchTvOnAir = () => async (dispatch) => {
    const resp = await movieDB.get('/tv/on_the_air', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });

    dispatch({ type: GET_TV_ON_AIR, payload: resp.data.results });
}

export const fetchTvTopRated = () => async (dispatch) => {
    const resp = await movieDB.get('/tv/top_rated', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });

    dispatch({ type: GET_TV_TOP_RATED, payload: resp.data.results });
}

export const fetchTvPopular = () => async (dispatch) => {
    const resp = await movieDB.get('/tv/popular', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });

    console.log(resp.data.results);

    dispatch({ type: GET_TV_POPULAR, payload: resp.data.results });
}


export const fetchTvGenres = () => async (dispatch) => {
    const resp = await movieDB.get('/genre/tv/list', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US'
        }
    });

    dispatch({ type: GET_TV_GENRES, payload: resp.data.genres });
}
