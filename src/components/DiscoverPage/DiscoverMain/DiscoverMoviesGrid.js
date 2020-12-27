import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Slide from '../../Utilities/Slide';
import movieDB from '../../../apis/movieDB';
import { connect } from 'react-redux';


const DiscoverMovies = () => {
    const imgBaseURL = useRef('https://image.tmdb.org/t/p/w342');
    const [moviesFetched, setMoviesFetched] = useState(false);
    const queryString = useLocation().search;
    const movieSearchValues = useRef( { sort_by: 'popular', people_inv: '', genres: '', key_words: '' } );
    const movieSearchValuesIds = useRef( { sort_by: '' } );


    

    useEffect(() => {
        const searchParams = new URLSearchParams(queryString);

        for (const [key, value] of searchParams) {

            movieSearchValues.current[key] = value;
            
        }
        console.log(movieSearchValues.current)

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

export default connect()(DiscoverMovies);