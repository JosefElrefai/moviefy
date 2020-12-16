/**@jsxImportSource @emotion/react */

import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const PBar = (props) => {
    const width = useRef(0);
    
    width.current = 100/props.moviesCount;

    return (
        <div css={PBarCSS} >
            <PlaceMarker className="palce-marker" width={width.current}  />
        </div>
    );
}

const PBarCSS = css`
    height: .7rem;
    background: white;
    overflow: hidden;
`;

const PlaceMarker = styled.div`
    background: #01b4e4;
    width: ${props => props.width}%;
    border-radius: 15px;
    height: 100%;
    transition: transform .7s; 
`;

const mapStateToProps = (state) => {
    return { activeIndex: state.activeIndex, moviesCount: state.headerMoviesCount };
};

export default connect(mapStateToProps)(PBar);

