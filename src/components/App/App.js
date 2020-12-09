import React, { Fragment } from 'react';
import axios from "axios";
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

const Cont = styled.div`
    height: 100vh;
    width: 100%;
    background: #161130;
    display: flex;
    align-items: center;
`;

const mapStateToProps = (state) => {
    return { allSongs: state.songs};
};



export default connect(null)(App);