import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { changeActiveIndex } from '../../../../actions/headerSlider';
import HeaderSliderContent from './HeaderSliderContent';

class HSliderContentContainer extends React.Component {
    constructor(props){
        super(props);
        this.moving = false;
        this.currentPos = null;
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
                const totalTransform = (currentTransform + diff) < 200 ? (currentTransform + diff) : 200;

                sliderContent.style.transform = `translateX(${totalTransform}px`;

            }
        }

        const handlePointerUp = () => {
            this.moving = false;
            sliderContent.style.transition = 'transform .5s';
            sliderContent.style.transform = `translateX(0px)`;
        }


        if(window.PointerEvent){
            sliderContent.addEventListener('pointerdown', (e) => handlePointerDown(e));
            sliderContent.addEventListener('pointermove', (e) => handlePointerMove(e));
            sliderContent.addEventListener('pointerup', (e) => handlePointerUp(e));
        } else {
            sliderContent.addEventListener('mousedown', (e) => handlePointerDown(e));
            sliderContent.addEventListener('mousemove', (e) => handlePointerMove(e));
            sliderContent.addEventListener('mouseup', (e) => handlePointerUp(e));
            
            sliderContent.addEventListener('touchdown', (e) => handlePointerDown(e));
            sliderContent.addEventListener('touchmove', (e) => handlePointerMove(e));
            sliderContent.addEventListener('touchup', (e) => handlePointerUp(e));
        }
    }

    componentDidMount(){
        //setInterval(this.changeSlide(),2400); 
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

export default connect(mapStateToProps, mapActionsTopProps)(HSliderContentContainer);