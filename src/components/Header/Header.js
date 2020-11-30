/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import Navbar from '../Navbar/Navbar';
import Slider from '../sliderComponents/Slider';
import { connect } from 'react-redux';

class Header extends React.Component{

    render(){
        return (
            <header css={headerCSS} >
                <Navbar />
                <Slider slides={this.props.mainImgs}  css={css`flex-grow: 1;`} />
            </header>
        );
    }
}


const headerCSS = css`
    height: 100vh;
    display: flex;
    flex-direction: column;

`;

const mapStateToProps = (state) => {
    return { mainImgs: state.headerPics };
}

export default connect(mapStateToProps)(Header);