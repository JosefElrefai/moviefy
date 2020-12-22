import React, { Fragment } from 'react';

import Navbar from '../Navbar/Navbar';
import DiscoverMain from './DiscoverMain/DiscoverMain';

class DiscoverPage extends React.Component {

    render(){
        console.log(this.props);
        return (
            <Fragment>
                <Navbar />
                <DiscoverMain />    
            </Fragment>
        );
    }
}

export default DiscoverPage;