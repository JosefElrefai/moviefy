/** @jsxImportSource @emotion/react */
import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import _ from 'lodash';

import HeaderSlide from './HeaderSlide';
import { setHMoviesCount } from '../../../../actions/headerSlider';

class headerSliderContent extends React.Component {
    constructor(props){
        super(props);
        this.threeMovies = []; //the three movies that will be rendered
    }

    componentDidMount(){
        this.props.setHMoviesCount(this.props.headerMovies.length);
    }

    getWidth = () => window.innerWidth; 

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
                    this.threeMovies[i] = headerMovies[this.props.activeIndex - 1 + i];
            }
        }
        return this.threeMovies.map(movie => <HeaderSlide movie={movie} key={movie.id} />);
    }

    render(){
        return (
            <HSliderContent width={this.getWidth()*3} className="h-slider-content" >
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

    const headerMoviesCount = 5;
    let moviesFrom = '';
    
    state.SRC === 'Tv' ? ( moviesFrom = 'TvPopular' ) : (moviesFrom = 'moviesUpcoming' );

    const headerMovies = _.result(state, moviesFrom).filter((m, i) => {
        if(i < headerMoviesCount){
            return true;
        }
        return false;
    });

    return { headerMovies, activeIndex: state.headerActiveIndex }
}

export default connect(mapStateToProps, { setHMoviesCount })(headerSliderContent);