/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import PBar from './PBar';
import HSliderContentContainer from './HSliderContentContainer';

class HeaderSlider extends React.Component {


    render(){
        return (
            <div css={HeaderSliderCSS} >
                <PBar />
                <HSliderContentContainer />
            </div>
        );
    }
}

const HeaderSliderCSS = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;


export default HeaderSlider;