/**@jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


class Slide extends React.Component{
    static propTypes = {
        imgURL: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        info: PropTypes.string
    }


    render(){
        return (
            <div css={SlideCSS} >
                <Image imgUrl={this.props.imgURL} />
                
                <h4 css={TitleCSS} >{this.props.title}</h4>
                <p css={InfoCSS} >{ this.props.info ? this.props.info : null }</p>
            </div>
        );
    }
}

const SlideCSS = css`
    width: 8rem;
    height: 16rem;
    font-size: .8rem;
`;

const Image = styled.div`
    width: 100%;
    height: 70%;
    background: url(${props => props.imgUrl}) center center / cover;
    border-radius: 5px;
    margin-bottom: .8rem;
`;

const TitleCSS = css`
    font-weight: 500;
    margin-bottom: .2rem;
`;

const InfoCSS = css`
    font-weight: 300;
    color: #ccc;
`;


export default Slide;