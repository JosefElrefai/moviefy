import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header';
import HomeMain from './HomeMain/HomeMain';
import Footer from '../Footer/Footer';
import { fetchMoviesTopRated, fetchMoviesUpcoming, fetchMoviesPopular, fetchMoviesGenres, fetchMoviesNowPlaying } from '../../actions/fetchMovies';
import { fetchTvPopular, fetchTvGenres, fetchTvAiringToday, fetchTvOnAir, fetchTvTopRated } from '../../actions/fetchTV';

class HomePage extends React.Component {    

    state = { fetchedMovies: false, fetchedTV: false }
    
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
        this.setState({ fetchedMovies: true });
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
        this.setState({ fetchedTV: true });
    }

    fetchDataIfNeeded(){
        const { SRC } = this.props;

        if( SRC === 'movies' && !this.state.fetchedMovies ){
            this.fetchMovies();

        } else if( SRC === 'Tv' && !this.state.fetchedTV){
            this.fetchTV();

        }
    }

    render(){

        this.fetchDataIfNeeded();

        const { fetchedMovies, fetchedTV } = this.state;
        const { SRC } = this.props;


        return ( SRC === 'movies' && fetchedMovies || SRC === 'Tv' && fetchedTV ) ? (
            <Fragment>
                <Header />
                <HomeMain />
                <Footer />
            </Fragment>
        ) : null;
    }
}

const mapStateToProps = (state) => {
    return { SRC: state.SRC };
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