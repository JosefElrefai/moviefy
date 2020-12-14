import { combineReducers } from 'redux';
import { moviesUpcoming, moviesTopRated, moviesPopular, movieGenres } from './movies';
import { activeIndex } from './headerSlider';


export default combineReducers({
        activeIndex,
        moviesTopRated,
        moviesUpcoming,
        moviesPopular,
        movieGenres
});

