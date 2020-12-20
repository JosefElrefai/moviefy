/** @jsxImportSource @emotion/react */
import React, { Fragment } from 'react';
import { css } from '@emotion/react';
import _ from 'lodash';

import ItemSlide from './ItemSlide';
import styled from '@emotion/styled';
import { connect } from 'react-redux';


class itemsSliderContent extends React.Component {
    
    constructor(props){
        super(props);
        //position is the first image shown from the total images array, (position in total images array)
        this.state = { position: 4 } 
        this.translateX = 0; //pixels to translate
        this.translateTime = .2;
        this.id = Math.floor(Math.random() * 1000);
        this.maxVisible = this.props.count;
    }

    
    
    componentWillUnmount() {
        document.querySelector(`#slider-content${this.id}`).removeEventListener('transitionend', (e) => this.handleTransitioinEnd(e));
    } 
    
    handleTransitioinEnd = (e) => {
        this.updateGapWidth();
        e.stopPropagation();
        if(e.target.id === `slider-content${this.id}`){
            this.translateTime = 0;
            this.translateX = 0; 
            if(this.props.translateNow.right){
                this.setState({position: this.state.position - 1});
            } else if(this.props.translateNow.left){
                this.setState({position: this.state.position + 1});
            } 
            this.props.clearTranslateNow();
            this.translateTime = .3;
        }
    }

    handleRezise = () => {
        if(window.innerWidth > 1500 ){
            this.props.changeVisibleSlides(this.maxVisible);
        } else {
            if(window.innerWidth < 591){
                this.props.changeVisibleSlides(2);
                return null;
            }
            if(window.innerWidth < 788){
                this.props.changeVisibleSlides(3);
                return null;
            }
            if(window.innerWidth < 985){
                this.props.changeVisibleSlides(4);
                return null;
            }
            if(window.innerWidth < 1181){
                this.props.changeVisibleSlides(5);
                return null;
            }
            if(window.innerWidth < 1379){
                this.props.changeVisibleSlides(6);
                return null;
            }
            if(window.innerWidth <= 1500){
                this.props.changeVisibleSlides(7);
                return null;
            }
        }
    }
    
    setEventListeners() {
        document.querySelector(`#slider-content${this.id}`).addEventListener('transitionend',(e) => this.handleTransitioinEnd(e));
        window.addEventListener('resize',() => this.handleRezise());
    }
    
    updateGapWidth() {
        if(document.querySelector('#gap-div')){ //ändra till bättre?
            this.gapWidth = document.querySelector('#gap-div').offsetWidth; 
        }
        
    }
    
    componentDidUpdate() {
        this.updateGapWidth();
    }
    
    componentDidMount() {
        this.updateGapWidth();
        this.setEventListeners();
        this.props.clearTranslateNow();
    }


    renderVisible = () => {
        const { count } = this.props;

        const { position } = this.state;
        
    
        const moviesOnScreen = this.props.totalMovies.slice(position - 1, position + count -1);
    
        return (
             <Fragment>
                 <div id="gap-div" css={gapDivCSS}></div>
    
                 {moviesOnScreen.map((movie, i) => {
                     return (
                        <Fragment key={movie + i}>
                            <ItemSlide movie={movie} />
                            <div css={gapDivCSS}></div>
                        </Fragment>
                     );
                 })}
             </Fragment>
         );
    
    }
    
    renderAllItems = () => {       
    
        const { count, totalMovies } = this.props;
        const { position } = this.state;
    
        return (
            <Fragment>
                <ItemSlide movie={totalMovies[position-2]} />
                <div css={visibleCSS}  >
                    {this.renderVisible()}
                </div>
                <ItemSlide movie={totalMovies[position + count - 1]} />
            </Fragment>
        );
    
    }
    
    render(){
        const {translateNow, count} = this.props;
         
        //(8rem) better solution getcomputedStyle... change soon
        
        if(translateNow.left && (this.state.position < (this.props.totalMovies.length - count + 1))){
            this.translateX = -8*16 - this.gapWidth;

        } else if(translateNow.right && (1 < this.state.position)){
            this.translateX = 8*16 + this.gapWidth;

        } else {
            this.translateX = 0;
        }

        return (
            <SliderContent id={`slider-content${this.id}`} translateTime={this.translateTime} translateX={this.translateX} > 

                    {this.renderAllItems()}

            </SliderContent> 
        );
    }    
}

const SliderContent = styled.div`
    width: 100%;
    height: 80%;
    margin: 0 -8rem;
    position: absolute;
    display: flex;
    transition: transform ${props => props.translateTime}s;
    transform: translateX(${props => props.translateX}px);
`;


const visibleCSS = css`
    width: 100%;
    display: flex;
`;  


const gapDivCSS = css`
    width: 10rem;
    flex-shrink: 1;
`;



const mapStateToProps = (state, props) => {

    const movies = _.result(state, props.itemsFrom);

    return { totalMovies: movies };


}

export default connect(mapStateToProps)(itemsSliderContent);