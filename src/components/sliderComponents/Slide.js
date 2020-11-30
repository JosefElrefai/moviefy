/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const Slide = ({im}) => {

    return (
        <div css={css`
            height: 100%;
            width: 100%;
            background: url('${im}');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

        `}>
            
        </div>
    );
};


export default Slide;