/**@jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

class HeaderSlide extends React.Component {
    constructor(props){
        super(props);

        for (const genre of props.totGenres) {
            if( props.movie.genre_ids[0] === genre.id ){
                this.movieGenre = genre.name;
            }
        }


    }

    render(){

        const { movie } = this.props;

        return (
            <HSlide movie={this.props.movie} >
                <div css={movieDetailsCSS} >
                    <p className="lead">Latest</p>
                    <h1>{movie.title ? movie.title : movie.name }</h1>
                    <p css={genreRatingCSS} >{`${this.movieGenre} | ${this.props.movie.vote_average} Rating`}</p>
                </div>
            </HSlide>
        );
    }
}



const HSlide = styled.div`
    width: 100%;
    background: url(${props => `https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}) center center / cover;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.4;
    }
`;

const movieDetailsCSS = css`
    position: absolute;
    left: 5rem;
    bottom: 5rem;
    color: white;

    display: flex;
    flex-direction: column;
    gap: .8rem;
`;

const genreRatingCSS = css`
    font-size: 1.2rem;
`;

const mapStateToProps = (state) => {

    const totGenres = state.SRC === 'Tv' ? state.TvGenres : state.movieGenres;

    return { totGenres };
}

export default connect(mapStateToProps)(HeaderSlide);