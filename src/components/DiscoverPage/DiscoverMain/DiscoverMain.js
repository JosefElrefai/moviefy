import React from 'react';

import './discoverMain.scss';
import UnderLine from '../../Utilities/ShortUnderLine';

class DiscoverMain extends React.Component{
    render(){
        return(
            <div id="discover-main" className="py-3">
                <UnderLine>
                    {() => ( <h1 className="discover-title" >Discover</h1> )}
                </UnderLine>
            </div>
        );
    }
}

export default DiscoverMain;