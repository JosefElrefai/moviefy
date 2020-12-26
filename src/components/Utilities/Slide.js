/**@jsxImportSource @emotion/react */
import React, { propT } from 'react';
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
    heigth: 16rem;
`;

const Image = styled.div`
    height: 70%;
    background: url(${props => props.imgUrl}) center center / cover;
`;

const TitleCSS = css`
    font-weight: 500;
`;

const InfoCSS = css`
    font-weight: 300;
    color: #ccc;
`;


export default Slide;