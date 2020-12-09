/** @jsxImportSource @emotion/react */
import React, { Fragment } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Navbar from '../../Navbar/Navbar';
import Slider from './sliderComponents/Slider';
import { connect } from 'react-redux';

class Header extends React.Component{



    render(){
        return (
            <Fragment>
                <Navbar />
                <header css={headerCSS} >
                    <EmptyDiv />
                    <Slider slides={this.props.mainImgs}  css={css`flex-grow: 1;`} />
                </header>

            </Fragment>
        );
    }
}



const EmptyDiv = styled.div`
    height: 0rem;
    position: absolute;
    top: 0;
`;

const headerCSS = css`
    height: 100vh;
    display: flex;
    flex-direction: column;

`;

const mapStateToProps = (state) => {
    return { mainImgs: state.headerPics };
}

export default connect(mapStateToProps)(Header);