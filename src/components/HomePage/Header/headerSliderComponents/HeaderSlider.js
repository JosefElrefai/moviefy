/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

class HeaderSlider extends React.Component {


    render(){
        return (
            <div css={HeaderSliderCSS} >
                <div css={pbarCSS}>
                    
                </div>
            </div>
        );
    }
}

const HeaderSliderCSS = css`
    height: 100vh;
    background: red;
`;
const pbarCSS = css`
    height: .9rem;
    background: blue;
`;


export default HeaderSlider;