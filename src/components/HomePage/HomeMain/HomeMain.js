import React from 'react';

import './homeMain.scss';
import ItemsSlider from '../../itemSliderComponents/ItemsSlider';

class HomeMain extends React.Component {
    render() {
        return(
            <div id="home-main">
                <ItemsSlider  width="80%"  height="20rem" numberOfSlides={7} />
                  
                <ItemsSlider  width="80%"  height="20rem" numberOfSlides={7} />
                  
                <ItemsSlider  width="80%"  height="20rem" numberOfSlides={7} />
            </div>
        );
    }
}


export default HomeMain;