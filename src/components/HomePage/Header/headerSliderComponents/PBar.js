/**@jsxImportSource @emotion/react */

import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

class PBar extends React.Component {

    

    render(){

        const width = 100/this.props.moviesCount;

        return (
            <div css={PBarCSS} >
                <PlaceMarker className="place-marker" width={width}  />
            </div>
        );

    }
}

const PBarCSS = css`
    height: .4rem;
    width: 100%;
    background: white;
`;

const PlaceMarker = styled.div`
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1, 1);
    position: absolute;
    top: 3.5rem;
    height: 3rem;
    box-shadow: 1px 1px white;
    margin-bottom: -1px;
    background:  #EB4E70;
    width: ${props => props.width}%;
    transition: transform .7s;

`;

const mapStateToProps = (state) => {
    return { activeIndex: state.activeIndex, moviesCount: state.headerMoviesCount };
};

export default connect(mapStateToProps)(PBar);

