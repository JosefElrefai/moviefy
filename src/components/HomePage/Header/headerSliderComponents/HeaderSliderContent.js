/** @jsxImportSource @emotion/react */
import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import HeaderSlide from './HeaderSlide';
import { setHMoviesCount } from '../../../../actions/headerSlider'

class headerSliderContent extends React.Component {
    constructor(props){
        super(props);
        this.threeMovies = [];
    }

    componentDidMount(){
        this.props.setHMoviesCount(this.props.headerMovies.length);
    }

    getWidth = () => window.innerWidth * 3; 

    renderSlides(){ //always renders 3 slides
        const { activeIndex, headerMovies } = this.props;

        //two special cases, (active slide always in middle)
        if(activeIndex === 0){
            this.threeMovies[0] = headerMovies[headerMovies.length - 1];
            this.threeMovies[1] = headerMovies[0];
            this.threeMovies[2] = headerMovies[1];
            
        } else if(activeIndex === headerMovies.length - 1){
            this.threeMovies[0] = headerMovies[activeIndex - 1];
            this.threeMovies[1] = headerMovies[activeIndex];
            this.threeMovies[2] = headerMovies[0];
        } else{
            for(let i = 0; i < 3; i++){
                //if(headerMovies.length - activeIndex - 1 >= 2){
                    this.threeMovies[i] = headerMovies[this.props.activeIndex - 1 + i];
               // } else{
                    console.log('HeaderMovies must have a minimum of three movies');
               // }
            }
        }

        console.log(this.threeMovies);
        return this.threeMovies.map(movie => <HeaderSlide movie={movie} key={movie.id} />);
    }

    render(){
        return (
            <HSliderContent width={this.getWidth()} className="h-slider-content" >
                {this.renderSlides()}
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
        if(4 < i){
            return false;
        }
        return true;
    });


    return { headerMovies, activeIndex: state.headerActiveIndex }
}

export default connect(mapStateToProps, { setHMoviesCount })(headerSliderContent);