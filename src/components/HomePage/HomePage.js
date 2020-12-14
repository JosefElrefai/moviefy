import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header';
import HomeMain from './HomeMain/HomeMain';
import Footer from '../Footer/Footer';
import { fetchMoviesTopRated, fetchMoviesUpcoming, fetchMoviesPopular, fetchMoviesGenres } from '../../actions/fetchMovies';

class HomePage extends React.Component {    


    componentDidMount(){
        //this.props.fetchMoviesTopRated();
        this.props.fetchMoviesUpcoming();
        //this.props.fetchMoviesPopular();
        //this.props.fetchMoviesGenres();
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


export default connect(mapStateToProps, { fetchMoviesTopRated, fetchMoviesUpcoming, fetchMoviesPopular, fetchMoviesGenres })(HomePage);