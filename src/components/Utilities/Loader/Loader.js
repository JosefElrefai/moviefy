/**@jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const Loader = () => {
    return (
        <div css={boxCSS} >
            
        </div>
    );
}

export default Loader;

const boxCSS = css`
    position: relative;
    top: 1rem;
    width: 15rem;
    height: 15rem;
    background: #1c1b29;
    margin: 0 auto;
    box-shadow: 0px 4px 12px #000;
    overflow: hidden;

    &::before{
        content: "";
        background-image: conic-gradient(
            #04b0ee 20deg,
            transparent 120deg
        );
        width: 150%;
        height: 150%;
        position: absolute;
        top: -25%;
        left: -25%;

    }

    &::after{
        content: "Chill";
        height: 94%;
        width: 94%;
        position: absolute;
        border-radius: 5px;
        background: #1c1b29;
        top: 3%;
        left: 3%;
        display: grid;
        place-items: center;
    }
`;

const rotate = keyframes`
    100%{
        transform: rotate(-360deg)
    }
`;