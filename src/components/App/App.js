import React, { Fragment } from 'react';
import axios from "axios";
import { connect } from 'react-redux';

import { fetchSongs } from '../../actions';
import HomePage from '../HomePage/HomePage';
import ItemsSlider from '../itemSliderComponents/ItemsSlider';
import styled from '@emotion/styled';
import '../../index.scss'

class App  extends React.Component {

    fs = async () => {
        //const res = await axios.get(`https://api.themoviedb.org/4/list/1?api_key=28a77d847a47c617ab081d7a68e94dc9`);
        //console.log(res);
    }

    render(){
        console.log(process.env.REACT_APP_API_KEY);
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



export default connect(null, { fetchSongs })(App);