import React from 'react';

import './discoverMain.scss';
import UnderLine from '../../Utilities/ShortUnderLine';
import { useLocation } from 'react-router-dom';

const DiscoverMain = () => {

    const query = new URLSearchParams(useLocation().search);
    console.log(query.get('movieNamee'));

    return(
        <div id="discover-main" className="py-3">
            <UnderLine>
                {() => ( <h1 className="discover-title" >Discover</h1> )}
            </UnderLine>

            <form>  {/*Make component */}
                <input type="text" name="movieNamee"></input>
                <input type="radio"></input>
                <button>
                    submint
                </button>
            </form>
        </div>
    );
}

export default DiscoverMain;