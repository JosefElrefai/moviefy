import React from 'react';

class HomeButton extends React.Component {
    render(){
        return (
            <div className="home-button">
                {this.props.title}
            </div>
        );
    }
}

export default HomeButton;