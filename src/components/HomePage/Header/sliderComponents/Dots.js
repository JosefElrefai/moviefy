/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

class Dots extends React.Component {

    constructor(props){
        super(props);

        const { amount } = props;

        this.arrAmount = [];
        for(let x = 0; x < amount; x++){
            this.arrAmount.push(x);
        }
    }

    renderDots = () => {
        return this.arrAmount.map((v, i) => {

            
            if(this.props.activeIndex === i || ((this.props.activeIndex === this.props.amount) && i === 0) ){
                return <div css={ActiveDotCSS} ></div>;
            }else {
                return <div css={dotsCSS} ></div>;
            }
        });
    }

    render(){
        return (
            <div css={dotsContainer} >
                {this.renderDots()}
            </div>
        );
    }
}

const dotsContainer = css`
    position: absolute;
    bottom: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

const ActiveDotCSS = css`
    height: 1.3rem;
    width: 1.3rem;
    margin: 0 -.15rem; 
    border-radius: 50%;
    background: #fff;
`;

const dotsCSS = css`

    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: #aaa;
`;

export default Dots;