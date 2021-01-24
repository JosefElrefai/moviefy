import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Slide from '../../../Utilities/Slide';
import { fetchDiscoverMovies } from '../../../../actions/fetchDiscover';
import getRespApiValues from './getRespondingApiValues';
import Loader from '../../../Utilities/Loader/Loader';


const DiscoverMovies = (props) => {
    const imgBaseURL = useRef('https://image.tmdb.org/t/p/w342');
    const defaulPosterURL = useRef('https://media.comicbook.com/files/img/default-movie.png?auto=webp')
    const queryString = useLocation().search;
    const history = useHistory();
    const [fetching, setFetching] = useState(false);
    const movieSearchValues = useRef( { sort_by: 'popularity.desc', with_people: '', genres: '', with_keywords: '' } );
    const respApiValues = useRef( {} );

    useEffect(() => {   //Gets new search params and stores them in movieSearchValues
        setFetching(true);
        setTimeout(() => setFetching(false),500);
        const searchParams = new URLSearchParams(queryString);
        movieSearchValues.current = {};
        for (const [key, value] of searchParams) {
            
            movieSearchValues.current[key] = value;
        }        

        (async () => {
            respApiValues.current = await getRespApiValues(movieSearchValues.current);
            props.fetchDiscoverMovies(respApiValues.current);
        })();
    }, [queryString]);


    const regExp = new RegExp('page=[0-9]{1,}', 'g');
    const goNextPage = () => {
        if(!movieSearchValues.current.page){
            queryString === '' ? history.push('?page=2') : history.push(queryString + '&page=2');
            return;
        } else{
            const nextPage = parseInt(movieSearchValues.current.page) + 1;
            history.push(queryString.replace(regExp, `page=${nextPage}`));
        }
    }

    const goPrevPage = () => {
        if(!movieSearchValues.current.page || movieSearchValues.current.page === '1') return;

        const prevPage = parseInt(movieSearchValues.current.page) - 1;
        history.push(queryString.replace(regExp, `page=${prevPage}`));
    }

    const renderMovies = () => {
        return props.discoverMovies.map(movie => (
            <Slide
                key={movie.id}
                title={movie.title}
                imgURL={ movie.poster_path ? `${imgBaseURL.current}/${movie.poster_path}` : defaulPosterURL.current }
            />
        ));
    }

    return !fetching ? (
        <Fragment>
            <div className="discover-grid" >
                { renderMovies() }
            </div>
            <div className="discover-pages" >
                <button className="button-primary-big" onClick={goPrevPage} >◀ PREV</button>
                <button className="button-primary-big" onClick={goNextPage} >NEXT ▶</button>
            </div>
        </Fragment>
    )
    : ( <Loader />);
    
}

const mapStateToProps = (state) => {
    return { discoverMovies: state.discoverMovies };
}

export default connect(mapStateToProps, { fetchDiscoverMovies })(DiscoverMovies);