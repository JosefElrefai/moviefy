/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

class PBar extends React.Component {
    render(){
        return(
            <div css={pbarCSS} />
        );
    }
}

const pbarCSS = css`
    height: .8rem;
    background: white;
`;

export default PBar;