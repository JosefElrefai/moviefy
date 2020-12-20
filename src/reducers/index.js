import { combineReducers } from 'redux';
import { moviesUpcoming, moviesTopRated, moviesPopular, moviesNowPlaying, movieGenres } from './movies';
import { TvPopular, TvTopRated, TvAiringToday, TvOnAir, TvGenres } from './TV';
import { headerActiveIndex, headerMoviesCount } from './headerSlider';
import { SRC } from './SRC';


export default combineReducers({
        moviesTopRated,
        moviesUpcoming,
        moviesPopular,
        moviesNowPlaying,
        movieGenres,

        TvPopular,
        TvTopRated,
        TvAiringToday,
        TvOnAir,
        TvGenres,
        
        headerActiveIndex,
        headerMoviesCount,
        SRC
});

