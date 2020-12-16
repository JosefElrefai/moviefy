import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { changeActiveIndex } from '../../../../actions/headerSlider';
import HeaderSliderContent from './HeaderSliderContent';

class HSliderContentContainer extends React.Component {
    constructor(props){
        super(props); //renger massa, rengör hela komponenten imorgon!, 
        this.moving = false; //GÖR TRANSITION END EVENT OCH NOLLSTÄLL DESSA & ÖKA ACTIVE INDEX 
        this.currentPos = null;
        this.maxDiff =  null;
        this.maxNow = false;
        this.moveLeftNow = false; 
        this.moveRightNow = false;
    }

    
    /*

    changeSlide() {
        let goToIndex;
        const { activeIndex } = this.props;

        if(activeIndex < 2){
            goToIndex = activeIndex + 1;
        } else {
            goToIndex = 0;
        }

        this.props.changeActiveIndex(goToIndex);
    }
    */

    getWidth = () => window.innerWidth;

    setUpTouch() {
        const sliderContent = document.querySelector('.h-slider-content');
        let currentTransform = 0;
        
        const handlePointerDown = (e) => {
            sliderContent.style.removeProperty('transition');
            this.moving = true;
            this.initialPos = e.pageX;
            const transformMatrix = window.getComputedStyle(sliderContent).getPropertyValue('transform');
            if(transformMatrix !== 'none'){
                currentTransform = parseInt(transformMatrix.split(',')[4].trim()); //this gives current offset
            }
        } 

        const handlePointerMove = (e) => { //this function is a incremental one (runs alot of times in small steps)
            if(this.moving){
                this.currentPos = e.pageX;
                const diff = this.currentPos - this.initialPos;

                if(Math.abs(diff) > this.maxDiff){ //this is to check if supposed to move after
                    this.maxDiff = Math.abs(diff);            //flytta till handle pointerup?
                    if(diff < 0){   
                        this.moveRightNow = true;
                    } else if(diff > 0){
                        this.moveLeftNow = true;
                    }
                } else{
                    this.moveLeftNow = false;
                    this.moveRightNow = false;
                }

                console.log(diff);
                const totalTransform = (currentTransform + diff) < 200 ? (currentTransform + diff) : 200; // sets max move (unneccecary now?)

                sliderContent.style.transform = `translateX(${totalTransform}px`;

            }
        }

        const handlePointerUp = () => {
            this.moving = false;
            sliderContent.style.transition = 'transform .7s';
            
            if(this.moveLeftNow){
                sliderContent.style.transform = `translateX(0px)`;

            } else if(this.moveRightNow){
                sliderContent.style.transform = `translateX(-${this.getWidth()*2}px)`; //flytt hit
            } else{
                sliderContent.style.transform = `translateX(-${this.getWidth()}px)`;
                this.maxDiff = 0;
            }
        }

        const handleTransitionEnd = () => {
            if(this.moveRightNow){
                this.props.changeActiveIndex(this.props.activeIndex + 1);
            } else if(this.moveLeftNow){
                this.props.changeActiveIndex(this.props.activeIndex - 1);
            }
            this.moveLeftNow = false; 
            this.moveRightNow = false;
            this.maxDiff = 0;

            sliderContent.style.removeProperty('transition');
            sliderContent.style.transform = `translateX(-${this.getWidth()}px)`;


        }

        if(window.PointerEvent){
            sliderContent.addEventListener('pointerdown', (e) => handlePointerDown(e));
            sliderContent.addEventListener('pointermove', (e) => handlePointerMove(e));
            sliderContent.addEventListener('pointerup', (e) => handlePointerUp(e));

            sliderContent.addEventListener('transitionend', () => handleTransitionEnd())
        } else {
            sliderContent.addEventListener('mousedown', (e) => handlePointerDown(e));
            sliderContent.addEventListener('mousemove', (e) => handlePointerMove(e));
            sliderContent.addEventListener('mouseup', (e) => handlePointerUp(e));
            
            sliderContent.addEventListener('touchdown', (e) => handlePointerDown(e));
            sliderContent.addEventListener('touchmove', (e) => handlePointerMove(e));
            sliderContent.addEventListener('touchup', (e) => handlePointerUp(e));

            sliderContent.addEventListener('transitionend', () => handleTransitionEnd())
        }
    }

    componentDidMount(){
        //setInterval(this.changeSlide(),2400);  
        const sliderContent = document.querySelector('.h-slider-content');
        sliderContent.style.transform = `translateX(-${this.getWidth()}px)`;
        this.setUpTouch();
        
    }

    
    componentWillUnmount(){

    }

    render (){
        return (
            <Fragment>
                <HeaderSliderContent />
            </Fragment>
        );
    }
}




const mapStateToProps = (state) => {

    return { activeIndex: state.activeIndex };
}

const mapActionsTopProps = () => {
    return { changeActiveIndex };
}

//a-ind
//movies
//

export default connect(mapStateToProps, { changeActiveIndex })(HSliderContentContainer);