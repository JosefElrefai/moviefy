import React from 'react';
//import { connect } from 'react-redux';

class headerSliderContent extends React.Component {
    render(){
        return (
            <div style={{display: "flex", width: "100%", overflow: "hidden", flexGrow: "1"}} className="h-slider-content" >
                <div style={{ height: "100%", width: "80%", background: "yellow", flexShrink: "0"}}>
                    a
                </div>
                <div style={{ height: "100%", width: "80%", background: "green", flexShrink: "0"}}>
                    b
                </div>

            </div>
        );
    }
} 

export default headerSliderContent;