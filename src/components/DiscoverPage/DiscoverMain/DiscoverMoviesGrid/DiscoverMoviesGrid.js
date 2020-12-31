import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Slide from '../../../Utilities/Slide';
import { fetchDiscoverMovies } from '../../../../actions/fetchDiscover';
import getRespApiValues from './getRespondingApiValues';


const DiscoverMovies = (props) => {
    const imgBaseURL = useRef('https://image.tmdb.org/t/p/w342');
    const defaulPosterURL = useRef('https://media.comicbook.com/files/img/default-movie.png?auto=webp')
    const queryString = useLocation().search;
    const [fetching, setFetching] = useState(false);
    const movieSearchValues = useRef( { sort_by: 'popularity.desc', with_people: '', genres: '', with_keywords: '' } );
    const respApiValues = useRef( {} );

    useEffect(() => {   //Gets new search params and stores them in movieSearchValues
        const searchParams = new URLSearchParams(queryString);
        movieSearchValues.current = {};
        for (const [key, value] of searchParams) {

            movieSearchValues.current[key] = value;
        }        
        
        (async () => {
            respApiValues.current = await getRespApiValues(movieSearchValues.current);
            console.log(respApiValues.current);
            props.fetchDiscoverMovies(respApiValues.current);
        })();
    }, [queryString]);


    const renderMovies = () => {
        return props.discoverMovies.map(movie => (
            <Slide
                key={movie.id}
                title={movie.title}
                imgURL={ movie.poster_path ? `${imgBaseURL.current}/${movie.poster_path}` : defaulPosterURL.current }
            />
        ));
    }

    return (

        <Fragment>
            <div className="discover-grid" >
                { renderMovies() }
            </div>
            <p className="discover-pages" >1 2 3</p>
        </Fragment>
    );
    
}

const mapStateToProps = (state) => {
    return { discoverMovies: state.discoverMovies };
}

export default connect(mapStateToProps, { fetchDiscoverMovies })(DiscoverMovies);