import React from 'react';
import './navbar.scss';

class Navbar extends React.Component {

    render() {
        return (
            <nav id="main-nav" className="py-1" >
                <div className="container">
                    <div className="nav-content">
                        <div><i className="fas fa-ad fa-2x" ></i></div>
                        <div className="search-container" >
                            <form className="search">
                                <input type="text" placeholder="Search..." className="search-text"></input>
                                <button type="submit"><i className="fas fa-search fa-lg" ></i></button>
                            </form>
                        </div>
                        <div><i className="fas fa-home fa-2x" ></i></div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;