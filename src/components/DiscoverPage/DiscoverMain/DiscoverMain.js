import React, { useEffect, useRef } from 'react';
import UnderLine from '../../Utilities/ShortUnderLine';
import { useHistory, useLocation } from 'react-router-dom';

import './discoverMain.scss';
import MoviesForm from './MoviesForm/MoviesForm';

const DiscoverMain = () => {

    const queryString = useLocation().search;
    console.log(queryString);
    const movieSearchValues = useRef( { sort_by: 'popular', people_inv: 'mission', genres: null } ); //Default values (needed?)


    const updateSearchValues = () => {
        
    };

    useEffect(() => { //put in DiscoverMovies components
        const searchParams = new URLSearchParams(queryString);
        console.log(movieSearchValues.current);

        
        for (const [key, value] of searchParams) {

            movieSearchValues.current[key] = value;
        }

    }, [queryString]);



    return(
        <div id="discover-main" className="py-3">
            <UnderLine>
                {() => ( <h1 className="discover-title" >Find The Movies You Like</h1> )}
            </UnderLine>

            <MoviesForm />


        </div>
    );
}

export default DiscoverMain;