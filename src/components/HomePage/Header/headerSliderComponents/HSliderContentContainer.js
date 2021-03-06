import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { changeHActiveIndex } from '../../../../actions/headerSlider';
import HeaderSliderContent from './HeaderSliderContent';
import PBar from './PBar';

class HSliderContentContainer extends React.Component {
    constructor(props){
        super(props);
        this.moving = false; 
        this.maxDiff =  null;
        this.moveLeftNow = false; 
        this.moveRightNow = false;
        this.transitioning = false;
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

        this.props.changeHActiveIndex(goToIndex);
    }
    */

    getWidth = () => window.innerWidth;

    setUpTouch() {
        const sliderContent = document.querySelector('.h-slider-content');
        let currentTransform = 0;
        
        this.handlePointerDown = (e) => {

            if(this.transitioning){
                return;
            }

            sliderContent.style.removeProperty('transition');
            this.moving = true;
            this.initialPos = e.pageX;
            const transformMatrix = window.getComputedStyle(sliderContent).getPropertyValue('transform');
            if(transformMatrix !== 'none'){
                currentTransform = parseInt(transformMatrix.split(',')[4].trim()); //this gives current offset
            }
        } 

        this.handlePointerMove = (e) => { //this function is a incremental one (runs alot of times in small steps)

            if(this.transitioning){
                return;
            }

            if(this.moving){
                const currentPos = e.pageX;
                const diff = currentPos - this.initialPos;

                if(Math.abs(diff) > this.maxDiff){ //this sets flags that handlePointerUp() will use 
                    this.maxDiff = Math.abs(diff); //to determine where to translate
                    if(diff < 0){   
                        this.moveRightNow = true;
                    } else if(diff > 0){
                        this.moveLeftNow = true;
                    }
                } else{
                    this.moveLeftNow = false;
                    this.moveRightNow = false;
                }

                //lines below sets a max translate for when next slide is not rendered
                let totalTransform;
                
                if((currentTransform + diff >= 200)){ //checking if max left 
                    totalTransform = 200;
                    this.moveRightNow = false; //makes sure it doesnt move wrong
                    this.moveLeftNow = true;

                } else if(currentTransform + diff <= - this.getWidth()*2 -200 ){ //checking if max right
                    totalTransform = -this.getWidth()*2 - 200;
                    this.moveRightNow = true; //makes sure it doesnt move wrong
                    this.moveLeftNow = false;

                } else { //must in range
                    totalTransform = currentTransform + diff;
                }
                
                sliderContent.style.transform = `translateX(${totalTransform}px`;

            }
        }

        this.handlePointerUp = () => {

            if(!this.moving){
                return;
            }

            this.moving = false;
            const placemarker = document.querySelector('.place-marker');
            sliderContent.style.transition = 'transform .7s';
            

            if(this.moveLeftNow){
                sliderContent.style.transform = `translateX(0px)`;

                if(this.props.activeIndex === 0){
                    placemarker.style.transform = `translateX(${100*(this.props.moviesCount - 1)}%)`;
                } else{
                    placemarker.style.transform = `translateX(${100*(this.props.activeIndex - 1)}%)`;
                }

            } else if(this.moveRightNow){
                sliderContent.style.transform = `translateX(-${this.getWidth()*2}px)`; 

                if(this.props.activeIndex === this.props.moviesCount -1){
                    placemarker.style.transform = `translateX(0%)`;
                } else{
                    placemarker.style.transform = `translateX(${100*(this.props.activeIndex + 1)}%)`;
                }

            } else{
                sliderContent.style.transform = `translateX(-${this.getWidth()}px)`;

                if(this.maxDiff === 0 || this.maxDiff === null){
                    return; //this fixed a bug, (when clicking, instead of moving transitionin will be stuck att true,
                            // (no transition & transition end to reset it))
                }

                this.maxDiff = 0;
            }
            
            this.transitioning = true;

        }

        this.handleTransitionEnd = () => {
            let activeIndexTo;

            if(this.moveRightNow){

            if(this.props.activeIndex === this.props.moviesCount - 1){
                activeIndexTo = 0;
            } else{
                activeIndexTo = this.props.activeIndex + 1;
            }


            this.props.changeHActiveIndex(activeIndexTo);

            } else if(this.moveLeftNow){

                if(this.props.activeIndex === 0){
                    activeIndexTo = this.props.moviesCount - 1;
                } else{
                    activeIndexTo = this.props.activeIndex - 1;
                }

                this.props.changeHActiveIndex(activeIndexTo);
            }

            this.moveLeftNow = false; 
            this.moveRightNow = false;
            this.maxDiff = 0;
            this.transitioning = false;

            sliderContent.style.removeProperty('transition');
            sliderContent.style.transform = `translateX(-${this.getWidth()}px)`;
        }


        if(window.PointerEvent){
            sliderContent.addEventListener('pointerdown', this.handlePointerDown);
            sliderContent.addEventListener('pointermove', this.handlePointerMove);
            sliderContent.addEventListener('pointerup', this.handlePointerUp);

        } else {
            sliderContent.addEventListener('mousedown', this.handlePointerDown);
            sliderContent.addEventListener('mousemove', this.handlePointerMove);
            sliderContent.addEventListener('mouseup', this.handlePointerUp);
            
            sliderContent.addEventListener('touchdown', this.handlePointerDown);
            sliderContent.addEventListener('touchmove', this.handlePointerMove);
            sliderContent.addEventListener('touchup', this.handlePointerUp);

        }
        sliderContent.addEventListener('transitionend', this.handleTransitionEnd);
    }

    handleResize = () => { //making slider responsive
        const sliderContent = document.querySelector('.h-slider-content');
        sliderContent.style.width = `${this.getWidth()*3}px`;
        sliderContent.style.transform = `translateX(-${this.getWidth()}px)`;

    }    

    componentDidMount(){
        //setInterval(this.changeSlide(),2400);
        const sliderContent = document.querySelector('.h-slider-content');
        sliderContent.style.transform = `translateX(-${this.getWidth()}px)`;
        this.setUpTouch();
        window.addEventListener('resize', this.handleResize);

    }

    
    componentWillUnmount = () => { //only removes eventListeners
        const sliderContent = document.querySelector('.h-slider-content');
        if(window.PointerEvent){
            sliderContent.removeEventListener('pointerdown', this.handlePointerDown);
            sliderContent.removeEventListener('pointermove', this.handlePointerMove);
            sliderContent.removeEventListener('pointerup', this.handlePointerUp);
        } else {
            sliderContent.removeEventListener('mousedown', this.handlePointerDown);
            sliderContent.removeEventListener('mousemove', this.handlePointerMove);
            sliderContent.removeEventListener('mouseup', this.handlePointerUp);
            
            sliderContent.removeEventListener('touchdown', this.handlePointerDown);
            sliderContent.removeEventListener('touchmove', this.handlePointerMove);
            sliderContent.removeEventListener('touchup', this.handlePointerUp);
        }

        sliderContent.removeEventListener('transitionend', this.handleTransitionEnd);
        window.removeEventListener('resize', this.handleResize);
    }

    render (){
        return (
            <Fragment>
                <PBar  />
                <HeaderSliderContent />
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {

    return { activeIndex: state.headerActiveIndex, moviesCount: state.headerMoviesCount };
}

export default connect(mapStateToProps, { changeHActiveIndex })(HSliderContentContainer);