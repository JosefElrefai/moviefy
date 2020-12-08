/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const Slide = ({im}) => {

    return (
        <div css={css`
            height: 100%;
            width: 100%;
            position: relative;
            background: url('${im}');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            &::before{
                content: '';
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                background: #333;
                opacity: 0.3;
            }
        `}>
            
            

        </div>
    );
};


export default Slide;