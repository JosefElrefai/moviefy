import React from 'react';
import { connect } from 'react-redux';

import './homeMain.scss';
import ItemsSlider from '../../itemSliderComponents/ItemsSlider';


class HomeMain extends React.Component {

    


    render() {
        const { SRC } = this.props;
        const S1ImgsFrom = SRC === 'movies' ? 'moviesUpcoming' : 'TvLatest'

        return(
            <div id="home-main">
                 <div className="container">

                    <div className="slider-content"  data-aos="fade">
                        <div className="slider-title" >
                            { SRC === 'movies' && <h2>Upcoming</h2>}
                            { SRC === 'TV' && <h2>Latest</h2>}
                        </div>
                        <ItemsSlider  width="80%"  height="20rem" numberOfSlides={7} imgsFrom="moviesUpcoming" />
                        <div className="faded-line" ></div>
                    </div>
                    
                    <div className="slider-content" data-aos="fade">
                        <div  className="slider-title" >
                            <h2>Popular</h2>
                        </div>
                        <ItemsSlider  width="80%"  height="20rem" numberOfSlides={7} imgsFrom="TvPopular" />
                        <div className="faded-line" ></div>
                    </div>

                    <div className="slider-content" data-aos="fade">
                       <div  className="slider-title" >
                            <h2>Top rated</h2>
                        </div>
                        <ItemsSlider  width="80%"  height="20rem" numberOfSlides={7} imgsFrom="moviesTopRated"  />
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

const mapStateToProps = (state) => {
    return { SRC: state.SRC };
}

export default connect(mapStateToProps)(HomeMain);