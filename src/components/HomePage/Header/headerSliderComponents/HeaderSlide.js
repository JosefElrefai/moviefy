/**@jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const HeaderSlide = (props) => {

    const getWidth = window.offset
    console.log(props.movie);

    return (
        <HSlide movie={props.movie} >
            <div css={movieDetailsCSS} >
                <p className="lead">Latest</p>
                <h3>{props.movie.title}</h3>
                <p>Thriller | 5.9 Rating</p>
            </div>
        </HSlide>
    );
}


{/* <div style={{ height: "100%", width: "100vw", background: "yellow", flexShrink: "0"}}>
                    a
                </div>
                <div style={{ height: "100%", width: "100vw", background: "green", flexShrink: "0"}}>
                    b
                </div> */}

const HSlide = styled.div`
    width: 100%;
    background: url(${props => `https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}) center center / cover;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #666;
        opacity: 0.3;
    }
`;

const movieDetailsCSS = css`
    position: absolute;
    left: 4rem;
    bottom: 4rem;
    color: white;
`;

export default HeaderSlide;