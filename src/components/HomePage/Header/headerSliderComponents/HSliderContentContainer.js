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
        const sliderContent = document.querySelector('h-slider-content');

        const handleMouseDown = (e) => {
            this.moving = true;
            this.initialPos = e.pageX;
        }

        const handleMouseMove = (e) => { //this function is a incremental one (runs alot of times in small steps)
            if(this.moving){
                this.currentPos = e.pageX;
                const diff = this.currentPos - this.initialPos; 
                sliderContent.style.transform;
            }
        }

        const handleMouseUp = () => {
            this.moving = false;
        }

        sliderContent.addEventListener('mousedown', (e) => handleMouseDown(e));

        sliderContent.addEventListener('mousemove', (e) => handleMouseMove(e));

        sliderContent.addEventListener('mouseup', (e) => handleMouseUp(e));

        
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

    const headerMovies = state.moviesUpcoming.filter((m, i) => {
        if(i > 4){
            return false;
        }
        return true;
    });

    return { activeIndex: state.activeIndex, headerMovies };
}

const mapActionsTopProps = () => {
    return { changeActiveIndex };
}

//a-ind
//movies
//

export default connect(mapStateToProps, mapActionsTopProps)(HSliderContentContainer);