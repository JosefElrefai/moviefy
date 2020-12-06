/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ItemSlide = (props) =>  {

    return (
        <div css={movieCSS} >
            <MovieImage image={props.image} ></MovieImage>
            <div>
                <h4>Spider Man</h4>
                <p>Action/Thriller</p>
            </div>
        </div>
    ); 

}

//box shadow makes sure there is no lines left behind after transition, having it same color makes it not visible
const movieCSS = css`
    min-width: 8rem;
    color: white;
    transition: transform .2s;
    box-shadow: 3px 3px 3px #161130;
    opacity: .8;
    h4{
        margin: .5rem 0 .2rem;
    }
    &:hover{    
        opacity: 1;
        transform: scale(1.13);
    }`;


const MovieImage = styled.div`
    width: 100%;
    height: 70%;
    background: url('${props => props.image}') center center / cover;
    border-radius: 5px;

`;





export default ItemSlide;