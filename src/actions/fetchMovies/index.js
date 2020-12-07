import movieDB from '../../apis/movieDB';
import { GET_TOP_RATED, GET_UPCOMING, GET_POPULAR, GET_GENRES } from '../actionTypes';

export const fetchMoviesTopRated = () => async (dispatch) => {
    const resp = await movieDB.get('/movie/top_rated', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });

    dispatch({ type: GET_TOP_RATED, payload: resp.data.results });
}

export const fetchMoviesUpcoming = () => async (dispatch) => {
    const resp = await movieDB.get('/movie/upcoming', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });
    console.log(resp.data);
    dispatch({ type: GET_UPCOMING, payload: resp.data.results });
}

export const fetchMoviesPopular = () => async (dispatch) => {
    const resp = await movieDB.get('/movie/popular', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1
        }
    });
    console.log(resp.data);
    dispatch({ type: GET_POPULAR, payload: resp.data.results });
}


export const fetchMoviesGenres = () => async (dispatch) => {
    const resp = await movieDB.get('/genre/movie/list', {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US'
        }
    });
    console.log(resp.data);
    dispatch({ type: GET_GENRES, payload: resp.data.genres });
}



