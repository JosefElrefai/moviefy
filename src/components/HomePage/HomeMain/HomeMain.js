import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './homeMain.scss';
import ItemsSlider from '../../itemSliderComponents/ItemsSlider';
import ChooseSRC from '../../Utilities/ChooseSRC';


class HomeMain extends React.Component {

    render() {
        const { SRC } = this.props;
        //const S1ItemsFrom = SRC === 'movies' ? 'moviesUpcoming' : ''

        return(
            <div id="home-main">
                 <div className="container">

                    <div className="home-buttons-container">
                        <ChooseSRC>
                            {({srcFrom}) => (
                                <Fragment>
                                    <button className="home-button" onClick={() => srcFrom('movies')} >
                                        Movies
                                    </button>
                                </Fragment>
                            )}
                        </ChooseSRC>

                        <ChooseSRC>
                            {({srcFrom}) => (
                                <Fragment>
                                    <button className="home-button" onClick={() => srcFrom('Tv')} >
                                        Series
                                    </button>
                                </Fragment>
                            )}
                        </ChooseSRC>
                    </div>

                    <div className="slider-content"  data-aos="fade">
                        <div className="slider-title" >
                            { SRC === 'movies' && <h2>Upcoming</h2>}
                            { SRC === 'Tv' && <h2>Airing Today</h2>}
                        </div>
                        <ItemsSlider 
                            width="80%"  
                            height="20rem" 
                            numberOfSlides={7} 
                            itemsFrom={SRC === 'Tv' ? 'TvAiringToday' : 'moviesUpcoming'}
                            />
                        <div className="faded-line" ></div>
                    </div>
                    
                    <div className="slider-content" data-aos="fade">
                        <div  className="slider-title" >
                            { SRC === 'movies' && <h2>Popular</h2> }
                            { SRC === 'Tv' && <h2>Popular</h2> }
                        </div>
                        <ItemsSlider 
                            width="80%" 
                            height="20rem" 
                            numberOfSlides={7} 
                            itemsFrom={SRC === 'Tv' ? 'TvPopular' : 'moviesPopular'}
                            />
                        <div className="faded-line" ></div>
                    </div>

                    <div className="slider-content" data-aos="fade">
                       <div  className="slider-title" >
                            { SRC === 'movies' && <h2>Top Rated</h2> }
                            { SRC === 'Tv' && <h2>Top Rated</h2> }
                        </div>
                        <ItemsSlider 
                            width="80%" 
                            height="20rem" 
                            numberOfSlides={7} 
                            itemsFrom={SRC === 'Tv' ? 'TvTopRated' : 'moviesTopRated'}
                            />
                        <div className="faded-line" ></div>
                    </div>  
                     
                    <div className="slider-content" data-aos="fade">
                       <div  className="slider-title" >
                            { SRC === 'movies' && <h2>Now Playing</h2> }
                            { SRC === 'Tv' && <h2>On The Air</h2> }
                        </div>
                        <ItemsSlider 
                            width="80%" 
                            height="20rem" 
                            numberOfSlides={7} 
                            itemsFrom={SRC === 'Tv' ? 'TvOnAir' : 'moviesNowPlaying'}
                            />
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