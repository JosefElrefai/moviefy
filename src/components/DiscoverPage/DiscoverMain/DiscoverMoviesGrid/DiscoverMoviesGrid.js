import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Slide from '../../../Utilities/Slide';
import { fetchDiscoverMovies } from '../../../../actions/fetchDiscover';
import getRespApiValues from './getRespondingApiValues';


const DiscoverMovies = (props) => {
    const imgBaseURL = useRef('https://image.tmdb.org/t/p/w342');
    const [moviesFetched, setMoviesFetched] = useState(false);
    const queryString = useLocation().search;
    const movieSearchValues = useRef( { sort_by: 'popularity.desc', with_people: '', genres: '', with_keywords: '' } );
    const respApiValues = useRef( {} );

    useEffect(() => {   //Gets new search params and stores them in movieSearchValues
        const searchParams = new URLSearchParams(queryString);
        movieSearchValues.current = {};
        for (const [key, value] of searchParams) {

            movieSearchValues.current[key] = value;
        }
        console.log(movieSearchValues.current);
        

        (async () => {
            respApiValues.current = await getRespApiValues(movieSearchValues.current);
            console.log(respApiValues.current);
            props.fetchDiscoverMovies(respApiValues.current);
        })();
        
        

    }, [queryString]);


    const renderMovies = () => {
    
    }

    return (

        <Fragment>
            
            <div className="discover-grid" >
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
                <Slide title="SpiderMan" imgURL={imgBaseURL.current + '/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg'} info="Action / Thriller" />
            </div>

        </Fragment>
    );
    
}

const mapStateToProps = (state) => {
    return { discoverMovies: state.discoverMovies };
}

export default connect(mapStateToProps, { fetchDiscoverMovies })(DiscoverMovies);