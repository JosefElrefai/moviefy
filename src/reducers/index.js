import { combineReducers } from 'redux';
import { moviesUpcoming, moviesTopRated, moviesPopular, movieGenres } from './movies';
import { TvLatest, TvPopular, TvTopRated } from './TV';
import { headerActiveIndex, headerMoviesCount } from './headerSlider';
import { SRC } from './SRC';


export default combineReducers({
        moviesTopRated,
        moviesUpcoming,
        moviesPopular,
        movieGenres,
        TvLatest,
        TvPopular,
        TvTopRated,
        headerActiveIndex,
        headerMoviesCount,
        SRC
});

