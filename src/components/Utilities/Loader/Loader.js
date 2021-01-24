/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Loader = () => {
    return (
        <div css={loaderContainer} >
            <div css={circleOne}></div>
            
        </div>
    );
}

export default Loader;

const loaderContainer = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 20rem;
    background: #222;
    margin: 0 auto;
`;

const circleOne = css`
    background: brown;
    width: 7rem;
    height: 7rem;
    border: 5px solid red;
    border-radius: 50%;
`;