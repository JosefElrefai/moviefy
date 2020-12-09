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
    height: 4.6rem;
`;

const headerCSS = css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    top: -4.6rem;
    margin-bottom: -4.6rem;
`;

const mapStateToProps = (state) => {
    return { mainImgs: state.headerPics };
}

export default connect(mapStateToProps)(Header);