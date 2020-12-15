/** @jsxImportSource @emotion/react */
import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import HeaderSlide from './HeaderSlide';

class headerSliderContent extends React.Component {

    getWidth = () => window.innerWidth * 3;

    render(){
        return (
            <HSliderContent width={this.getWidth()} className="h-slider-content" >
                {this.props.headerMovies.map((movie) => <HeaderSlide movie={movie} key={movie.id} />)}
            </HSliderContent>
        );
    }
}



const HSliderContent = styled.div`
    flex-grow: 1;
    width: ${props => props.width}px;
    display: flex;
    touch-action: none;
`;

const mapStateToProps = (state) => {

    const headerMovies = state.moviesUpcoming.filter((m, i) => {
        if(i > 2){
            return false;
        }
        return true;
    });

    return { headerMovies }
}

export default connect(mapStateToProps)(headerSliderContent);