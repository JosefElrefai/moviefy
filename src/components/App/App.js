import React, { Fragment } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import HomePage from '../HomePage/HomePage';
import ItemsSlider from '../itemSliderComponents/ItemsSlider';
import styled from '@emotion/styled';
import '../../index.scss'

class App  extends React.Component {

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