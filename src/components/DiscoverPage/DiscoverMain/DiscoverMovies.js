import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slide from '../../Utilities/Slide';


const DiscoverMovies = () => {
    const imgBaseURL = useRef('https://image.tmdb.org/t/p/w342');
    const [moviesFetched, setMoviesFetched] = useState(false);
    const queryString = useLocation().search;
    const movieSearchValues = useRef( { sort_by: 'popular', people_inv: 'mission', genres: null } ); //Default values (needed?)


    useEffect(() => {
        const searchParams = new URLSearchParams(queryString);
        console.log(movieSearchValues.current);

        for (const [key, value] of searchParams) {

            movieSearchValues.current[key] = value;
        }

    }, [queryString]);

    
    return (

        <Fragment>
            { moviesFetched === true ? (<div>
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
            </div>) : (<div>Loading...</div> ) }


        </Fragment>
    );
    
}

export default DiscoverMovies;