import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header';
import HomeMain from './HomeMain/HomeMain';
import Footer from '../Footer/Footer';
import { fetchMoviesTopRated, fetchMoviesUpcoming, fetchMoviesPopular, fetchMoviesGenres } from '../../actions/fetchMovies';
import { fetchTvPopular, fetchTvGenres } from '../../actions/fetchTV';

class HomePage extends React.Component {    


    componentDidMount(){
        //this.props.fetchMoviesTopRated();
        this.props.fetchMoviesUpcoming();
        //this.props.fetchMoviesPopular();
        this.props.fetchMoviesGenres();
        this.props.fetchTvPopular();
        this.props.fetchTvGenres();
    }

    render(){
       if(this.props.moviesUpcoming.length === 0){
           return null;
       }
        return (
            <Fragment>
                <Header />
                <HomeMain />
                <Footer />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { moviesUpcoming: state.moviesUpcoming };
}

const mapActionsToProps = {
    fetchMoviesTopRated,
    fetchMoviesUpcoming,
    fetchMoviesPopular,
    fetchMoviesGenres,
    fetchTvPopular,
    fetchTvGenres
};

export default connect(mapStateToProps, mapActionsToProps)(HomePage);