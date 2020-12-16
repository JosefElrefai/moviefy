import { combineReducers } from 'redux';
import { moviesUpcoming, moviesTopRated, moviesPopular, movieGenres } from './movies';
import { headerActiveIndex, headerMoviesCount } from './headerSlider';


export default combineReducers({
        moviesTopRated,
        moviesUpcoming,
        moviesPopular,
        movieGenres,
        headerActiveIndex,
        headerMoviesCount
});

