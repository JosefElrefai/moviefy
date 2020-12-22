import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from '../HomePage/HomePage';
import DiscoverPage from '../DiscoverPage/DiscoverPage';
import '../../index.scss'

class App  extends React.Component {

    componentDidMount(){
        AOS.init({duration: 2000, once: false});
    }

    ttt(){
        return <div>alohamoha</div>;
    }

    render(){
        return (
            <Fragment>
                <BrowserRouter>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/discover/:firstparam?" exact component={DiscoverPage} />
                </BrowserRouter>
            </Fragment>
    
        );
    }
};

export default App;