import { GET_TV_LATEST, GET_TV_POPULAR, GET_TV_TOP_RATED, GET_TV_GENRES } from './actionTypes';
import movieDB from '../apis/movieDB';

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
    dispatch({ type: GET_TV_POPULAR, payload: resp.data.results });
}

export const fetchMoviesLatest = () => async (dispatch) => {
    const resp = await movieDB.get('/tv/latest', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });

    dispatch({ type: GET_TV_LATEST, payload: resp.data.results });
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
