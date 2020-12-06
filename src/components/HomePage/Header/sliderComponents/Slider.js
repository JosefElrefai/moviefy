/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Dots from './Dots';


class Slider extends React.Component{

    state = {
        activeIndex: 0, // index för bild som visas
        translate: 0, //hur mkt den ska röra sig i pixlar
        transition: 0.45 //tid i sekunder
    };
    

    getWidth = () => window.innerWidth; //byt här senare

    nextSlide = () => {
        const {activeIndex} = this.state;

        this.setState({
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * this.getWidth()
        });
    }

    componentDidMount = () => {
        setInterval(this.nextSlide, 10000);
        this.tra = this.state.transition;
    }

    componentDidUpdate(){
        if(this.state.activeIndex === 3){

            const cb = () => {
                this.tra = 0;
                this.setState({activeIndex: 0, translate: 0});
                
            }
            
            setTimeout( cb, 1000);
            
           

        }else {
            this.tra = this.state.transition;
        }
    }

    render() {
        return (
            <div css={sliderCSS}>
                <SliderContent  translate={this.state.translate}  transition={this.tra}  width={this.getWidth() * this.props.slides.length}>
    
                    {this.props.slides.map((slide, i) => <Slide key={slide + i} im={slide} /> )}

                                        
                </SliderContent> 
                <Dots amount={this.props.slides.length - 1} activeIndex={this.state.activeIndex} />
            </div>
        );
    }
};

const sliderCSS = css`
    background-color: #333; 
    position: relative;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`;


export default Slider;