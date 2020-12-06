import React from 'react';
import styled from '@emotion/styled';



const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    background: #333;
    display: flex;
`;



export default SliderContent; 