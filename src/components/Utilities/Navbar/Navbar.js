import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <nav id="main-nav" className="py-1" >
                <div className="container">
                    <div className="nav-content">
                        <div className="left-icons"><a href="#" className="main-logo"></a></div>
                        
                        <div className="search-container" data-aos="bounce">
                            <form className="search">
                                <input type="text" placeholder="Search..." className="search-text"></input>
                                <button type="submit"><i className="fas fa-search fa-lg" ></i></button>
                            </form>
                        </div>

                        <div className="right-icons">
                            <Link to="/" className="home-icon"></Link>
                            <a href="#" className="user-icon"></a>
                            <Link to="/discover" className="explore-icon">
                                
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;