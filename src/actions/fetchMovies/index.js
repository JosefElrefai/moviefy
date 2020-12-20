import movieDB from '../../apis/movieDB';
import { GET_M_TOP_RATED, GET_M_UPCOMING, GET_M_POPULAR, GET_M_GENRES, GET_M_NOW_PLAYING } from '../actionTypes';

export const fetchMoviesTopRated = () => async (dispatch) => {
    const resp = await movieDB.get('/movie/top_rated', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });

    dispatch({ type: GET_M_TOP_RATED, payload: resp.data.results });
}

export const fetchMoviesUpcoming = () => async (dispatch) => {
    const resp = await movieDB.get('/movie/upcoming', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });

    dispatch({ type: GET_M_UPCOMING, payload: resp.data.results });
}

export const fetchMoviesPopular = () => async (dispatch) => {
    const resp = await movieDB.get('/movie/popular', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });
    dispatch({ type: GET_M_POPULAR, payload: resp.data.results });
}

export const fetchMoviesNowPlaying = () => async (dispatch) => {
    const resp = await movieDB.get('/movie/now_playing', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });
    dispatch({ type: GET_M_NOW_PLAYING, payload: resp.data.results });
}


export const fetchMoviesGenres = () => async (dispatch) => {
    const resp = await movieDB.get('/genre/movie/list', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US'
        }
    });

    dispatch({ type: GET_M_GENRES, payload: resp.data.genres });
}



