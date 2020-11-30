import React, { Fragment } from 'react';
import axios from "axios";
import { connect } from 'react-redux';

import { fetchSongs } from '../../actions';
import Header from '../Header/Header';

class App  extends React.Component {

    fs = async () => {
        //const res = await axios.get(`https://api.themoviedb.org/4/list/1?api_key=28a77d847a47c617ab081d7a68e94dc9`);
        //console.log(res);
    }

    render(){
        return (
            <Fragment>
                <Header />
            </Fragment>
    
        );
    }
};

const mapStateToProps = (state) => {
    return { allSongs: state.songs};
};



export default connect(null, { fetchSongs })(App);