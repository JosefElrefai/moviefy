import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header';
import HomeMain from './HomeMain/HomeMain';
import Footer from '../Utilities/Footer/Footer';
import { fetchMoviesTopRated, fetchMoviesUpcoming, fetchMoviesPopular, fetchMoviesGenres, fetchMoviesNowPlaying } from '../../actions/fetchMovies';
import { fetchTvPopular, fetchTvGenres, fetchTvAiringToday, fetchTvOnAir, fetchTvTopRated } from '../../actions/fetchTV';

class HomePage extends React.Component {
    constructor(props){
        super(props);

        !!props.moviesPopular.length && (this.fetchedMovies = true);
        !!props.TvPopular.length && (this.fetchedTV = true);
    }

    async fetchMovies(){
        await Promise.all(
            [
                this.props.fetchMoviesTopRated(),
                this.props.fetchMoviesUpcoming(),
                this.props.fetchMoviesPopular(),
                this.props.fetchMoviesNowPlaying(),
                this.props.fetchMoviesGenres()
            ]
        )
        this.fetchedMovies = true;
    }

    async fetchTV(){
        await Promise.all(
            [
                this.props.fetchTvPopular(),
                this.props.fetchTvAiringToday(),
                this.props.fetchTvOnAir(),
                this.props.fetchTvTopRated(),
                this.props.fetchTvGenres()
            ]
        )
        this.fetchedTV = true;
    }

    fetchDataIfNeeded(){
        const { SRC } = this.props;

        if( SRC === 'movies' && !this.fetchedMovies ){
            this.fetchMovies();

        } else if( SRC === 'Tv' && !this.fetchedTV ){
            this.fetchTV();

        }
    }


    render(){

        this.fetchDataIfNeeded();

        const { SRC } = this.props;


        return ( (SRC === 'movies' && this.fetchedMovies) || (SRC === 'Tv' && this.fetchedTV) ) ? (
            <Fragment>
                <Header />
                <HomeMain />
                <Footer />
            </Fragment>
        ) : null;
    }
}

const mapStateToProps = (state) => {
    return { SRC: state.SRC, moviesPopular: state.moviesPopular, TvPopular: state.TvPopular };
}

const mapActionsToProps = {
    fetchMoviesTopRated,
    fetchMoviesUpcoming,
    fetchMoviesPopular,
    fetchMoviesNowPlaying,
    fetchMoviesGenres,

    fetchTvAiringToday,
    fetchTvPopular,
    fetchTvOnAir,
    fetchTvTopRated,
    fetchTvGenres
};

export default connect(mapStateToProps, mapActionsToProps)(HomePage);