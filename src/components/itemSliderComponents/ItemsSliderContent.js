/** @jsxImportSource @emotion/react */
import React, { Fragment } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';

import ItemSlide from './ItemSlide';
import styled from '@emotion/styled';


class itemsSliderContent extends React.Component {
    
    constructor(props){
        super(props);
        //position is the first image shown from the total images array, (position in total images array)
        this.state = { images: [this.props.count], position: 4 } 
        this.translateX = 0; //pixels to translate
        this.translateTime = .2;
    }

    
    
    componentWillUnmount() {
        document.querySelector('#slider-content').removeEventListener('transitionend', (e) => this.handleTransitioinEnd(e));
    } 
    
    handleTransitioinEnd = (e) => {
        this.updateGapWidth();
        e.stopPropagation();
        if(e.target.id === 'slider-content'){
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
    
    setEventListener() {
        document.querySelector('#slider-content').addEventListener('transitionend',(e) => this.handleTransitioinEnd(e));
    }
    
    updateGapWidth() {
        if(document.querySelector('#gap-div')){ //ändra till bättre?
            this.gapWidth = document.querySelector('#gap-div').offsetWidth; 
        }
        
    }
    
    componentDidUpdate() {
        this.updateGapWidth();
    }
    
    async fetchImages() {
        const resp = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=28a77d847a47c617ab081d7a68e94dc9&language=en-US&page=1');
        console.log(resp);
        const imagePaths = resp.data.results.map(result => result.poster_path);
        const images = imagePaths.map(path => `https://image.tmdb.org/t/p/w154${path}`)
        this.setState({images: images});
    }
    
    componentDidMount() {
        this.fetchImages();
        this.updateGapWidth();
        this.setEventListener();
        this.props.clearTranslateNow();
    }


    renderVisible = () => {
        const { count } = this.props;
        const { position } = this.state;
        
        
    
        const imagesOnScreen = this.state.images.slice(position - 1, position + count -1);
    
        return (
             <Fragment>
                 <div id="gap-div" css={gapDivCSS}></div>
    
                 {imagesOnScreen.map((image, i) => {
                     return (
                        <Fragment key={image + i}>
                            <ItemSlide image={image} />
                            <div css={gapDivCSS}></div>
                        </Fragment>
                     );
                 })}
             </Fragment>
         );
    
    }
    
    renderAllItems = () => {       
    
        const { count } = this.props;
        const { images, position } = this.state;
    
        return (
            <Fragment>
                <ItemSlide image={images[position-2]} />
                <div css={visibleCSS}  >
                    {this.renderVisible()}
                </div>
                <ItemSlide image={images[position + count - 1]} />
            </Fragment>
        );
    
    }
    
    render(){
        const {translateNow, count} = this.props;
         
        //(8rem) better solution getcomputedStyle... change soon
        
        if(translateNow.left && (this.state.position < (this.state.images.length - count + 1))){
            this.translateX = -8*16 - this.gapWidth;

        } else if(translateNow.right && (1 < this.state.position)){
            this.translateX = 8*16 + this.gapWidth;

        } else {
            this.translateX = 0;
        }

        return (
            <SliderContent id="slider-content" translateTime={this.translateTime} translateX={this.translateX} > 

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

export default itemsSliderContent;