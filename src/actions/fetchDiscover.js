import movieDB from '../apis/movieDB';
import { GET_DISCOVER } from './actionTypes';

export const fetchDiscoverMovies = (searchParams) => { // MergreSearchParams
    const staticParams = {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US'
    };

    const totParams = { ...staticParams, ...searchParams };
    const resp = await movieDB.get('/discover/movies', { params: totParams });

    dispatch({ type: GET_DISCOVER, payload: resp.data.results });
}

export const fetchDiscoverTV = (searchParams) => { // MergreSearchParams
    const staticParams = {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US'
    };

    const totParams = { ...staticParams, ...searchParams };
    const resp = await movieDB.get('/discover/tv', { params: totParams });

    dispatch({ type: GET_DISCOVER, payload: resp.data.results });
}

