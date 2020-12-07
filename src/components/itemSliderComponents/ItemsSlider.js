/** @jsxImportSource @emotion/react */
import React, { Fragment, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ItemsSliderContent from './ItemsSliderContent';

const ItemsSlider = (props) => {

    const [translateNow, setTranslateNow] = useState({left: false, right: false});


    const clearTranslateNow = () => {
        setTranslateNow({left: false, right: false});
    }

    const translateRight = () => {
        setTranslateNow({right: true});
    }

    const translateLeft = () => {
        setTranslateNow({left: true});
    }

    return (

        <div css={containerCSS}>
            <i className="fas fa-chevron-left fa-3x" css={leftChevronCSS} onClick={() => translateRight()} ></i>
            
            <Slider height={props.height} width={props.width} >
                <ItemsSliderContent 
                    count={props.numberOfSlides}
                    ImgsFrom={props.imgsFrom} 
                    translateNow={translateNow} 
                    clearTranslateNow={() => clearTranslateNow()} />
            </Slider>

            <i className="fas fa-chevron-right fa-3x" css={rightChevronCSS} onClick={() => translateLeft()} ></i>
        </div>

    );
}

const containerCSS = css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
`;

const Slider = styled.div`
    position: relative;
    overflow: hidden;
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    margin: 0;
`;


const rightChevronCSS = css`
    color: white;
    margin-bottom: 3rem;
    margin-left: 1.5rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const leftChevronCSS = css`
    color: white;
    margin-bottom: 3rem;
    margin-right: 1.5rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`;


export default ItemsSlider;