/** @jsxImportSource @emotion/react */
import React, { Fragment } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Navbar from '../../Navbar/Navbar';
import HeaderSlider from './headerSliderComponents/HeaderSlider';
import { connect } from 'react-redux';

class Header extends React.Component{

    render(){
        return (
            <Fragment>
                <Navbar />
                <header css={headerCSS} >
                    <EmptyDiv/>
                    <HeaderSlider slides={this.props.mainImgs} />
                </header>

            </Fragment>
        );
    }
}



const EmptyDiv = styled.div`
    min-height: 4.6rem;
    flex-grow: 0;
`;

const headerCSS = css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: -4.6rem;
`;

const mapStateToProps = (state) => {
    return { mainImgs: state.headerPics };
}

export default connect(mapStateToProps)(Header);