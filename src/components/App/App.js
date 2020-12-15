import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from '../HomePage/HomePage';
import '../../index.scss'

class App  extends React.Component {

    componentDidMount(){
        AOS.init({duration: 2000, once: false});
    }

    render(){
        return (
            <Fragment>
                <HomePage />
            </Fragment>
    
        );
    }
};

export default connect()(App);