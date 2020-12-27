import React, { useEffect, useRef } from 'react';
import UnderLine from '../../Utilities/ShortUnderLine';
import { useHistory, useLocation } from 'react-router-dom';

import './discoverMain.scss';
import MoviesForm from './MoviesForm';
import DiscoverMovies from './DiscoverMovies';

const DiscoverMain = () => { 

    return(
        <div id="discover-main" className="py-3">
            <div className="container">

                <UnderLine>
                    {() => ( <h1 className="discover-title" >Find Movies You Like</h1> )}
                </UnderLine>

                <MoviesForm /> {/* Changes URL so that discoverMovies shows right movies */}

                <DiscoverMovies /> {/* Uses URL to fetch right movies */}

            </div>
        </div>
    );
}

export default DiscoverMain;