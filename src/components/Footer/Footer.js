import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <footer id="footer" >
            <div className="container">
                <div className="footer-content">
                    <div className="me-info" data-aos="slide-right" aos-data-delay="300">
                        <div className="info-titles">
                            <h2>Moviefy</h2>
                            <p>Home</p>
                            <p>Profile</p>
                            <p>Discover</p>
                        </div>
                        
                        <p>Portfolio: <em className="mx-1">www.josefelrefai.com</em></p>
                        <p>Phone Number: <em className="mx-1">+46-707302403</em></p>
                        <div>
                            <p>Copyright © 2020</p>
                            <p className="py-05" >Made By Josef Elrefai</p>
                        </div>
                        
                    </div>
                    <div className="movieDB-info" data-aos="slide-left" aos-data-delay="300">
                        <div className="tmdb-logo">
                            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="logo" width="200"/>
                        </div>
                        <div className="socials">
                            <a href="https://twitter.com/themoviedb" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-delay="2300">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>

                            <a href="https://www.facebook.com/themoviedb" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-delay="2600">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>

                            <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-delay="2900">
                                <i className="fas fa-code fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;