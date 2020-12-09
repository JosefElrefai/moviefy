import React from 'react';
import { connect } from 'react-redux';

import './homeMain.scss';
import ItemsSlider from '../../itemSliderComponents/ItemsSlider';


class HomeMain extends React.Component {

    render() {
        return(
            <div id="home-main">
                 <div className="container">

                    <div className="slider-content"  data-aos="fade">
                        <div className="slider-title" >
                            <h2 >Upcoming</h2>
                        </div>
                        <ItemsSlider  width="80%"  height="20rem" numberOfSlides={7} imgsFrom="Upcoming" />
                        <div className="faded-line" ></div>
                    </div>
                    
                    <div className="slider-content" data-aos="fade">
                        <div  className="slider-title" >
                            <h2>Popular</h2>
                        </div>
                        <ItemsSlider  width="80%"  height="20rem" numberOfSlides={7} imgsFrom="Popular" />
                        <div className="faded-line" ></div>
                    </div>

                    <div className="slider-content" data-aos="fade">
                        <div  className="slider-title" >
                            <h2>Top rated</h2>
                        </div>
                        <ItemsSlider  width="80%"  height="20rem" numberOfSlides={7} imgsFrom="TopRated"  />
                        <div className="faded-line" ></div>
                    </div>
                    
                 </div>
            </div>
        );
    }
}

/*
ItemsSlider imgsFrom: 
    TopRated
    Upcoming
    Popular

*/

export default HomeMain;