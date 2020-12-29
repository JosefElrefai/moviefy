import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Slide from '../../../Utilities/Slide';
import getRespApiValues from './getRespondingApiValues';

const DiscoverMovies = () => {
    const imgBaseURL = useRef('https://image.tmdb.org/t/p/w342');
    const [moviesFetched, setMoviesFetched] = useState(false);
    const queryString = useLocation().search;
    const movieSearchValues = useRef( { sort_by: 'popular', people_inv: '', genres: '', key_words: '' } );
    const respApiValues = useRef( {} );

    // const getRespondingApiValues = {
    //     getKeywordId: async (query) => {
    //         const resp = await movieDB.get('/search/keyword', {
    //             params: {
    //                 api_key: process.env.REACT_APP_API_KEY,
    //                 query: query
    //             }
    //         });

    //         if( resp.data.total_results === 0 ){
    //             return null;
    //         }

    //         return resp.data.results.find(k => k.name === movieSearchValues.current.key_words).id;
    //     }
    // };

    useEffect(() => {   //Gets new search params and stores them in movieSearchValues
        const searchParams = new URLSearchParams(queryString);

        for (const [key, value] of searchParams) {

            movieSearchValues.current[key] = value;
        }
        console.log(movieSearchValues.current);

        (async () => {
            respApiValues.current = await getRespApiValues(movieSearchValues.current);
            console.log(respApiValues.current);
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

export default connect(mapStateToProps)(DiscoverMovies);