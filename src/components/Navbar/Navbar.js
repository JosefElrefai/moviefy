import React from 'react';
import './navbar.scss';

class Navbar extends React.Component {

    render() {
        return (
            <nav id="main-nav" className="py-1" >
                <div className="container">
                    <div className="nav-content">
                        <div className="left-icons"><a href="#" className="main-logo"></a></div>
                        
                        <div className="search-container" >
                            <form className="search">
                                <input type="text" placeholder="Search..." className="search-text"></input>
                                <button type="submit"><i className="fas fa-search fa-lg" ></i></button>
                            </form>
                        </div>

                        <div className="right-icons">
                            <a href="#" className="home-icon"></a> {/* Make Link*/}
                            <a href="#" className="user-icon"></a>
                            <a href="#" className="explore-icon"></a>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;