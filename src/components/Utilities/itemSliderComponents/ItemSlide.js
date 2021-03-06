/** @jsxImportSource @emotion/react */
import React from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ItemSlide = (props) =>  {

    let img = '';
    let title = '';
    let genres = '';
    if(props.movie){

        img = `https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`;
        title = props.movie.title ? props.movie.title : props.movie.name;

        let genreOne;
        let genreTwo;

        props.totGenres.forEach(genre => {
            if(props.movie.genre_ids.length === 1){
                if(props.movie.genre_ids[0] === genre.id){
                    genres = genre.name;
                }
            } else {
                if(props.movie.genre_ids[0] === genre.id){
                    genreOne = genre.name;
                } else if (props.movie.genre_ids[1] === genre.id){
                    genreTwo = genre.name;
                }
                genres = `${genreOne} / ${genreTwo}`;
            }
        });
       
    }
    
    return (
        <div css={movieCSS} >
            <MovieImage image={img} ></MovieImage>
            <div>
                <h4 css={titleCSS} >{title}</h4>
                <p css={genresCSS} >{genres}</p>
            </div>
        </div>
    ); 

}

//img => `https://image.tmdb.org/t/p/w154/${img.poster_path}`

//box shadow makes sure there is no lines left behind after transition, having it same color makes it not visible
const movieCSS = css`
    min-width: 8rem;
    color: white;
    transition: transform .2s;
    box-shadow: 3px 3px 3px #161130;
    opacity: .7;
    h4{
        margin: .5rem 0 .2rem;
    }
    &:hover{    
        opacity: 1;
        transform: scale(1.13);
    }`;

const titleCSS = css`
    font-weight: 500;
`;

const genresCSS = css`
    font-weight: 300;
    color: #ccc;
`;


const MovieImage = styled.div`
    width: 100%;
    height: 70%;
    background: url('${props => props.image}') center center / cover;
    border-radius: 5px;
    margin-bottom: .8rem;
`;


const mapStateToProps = (state) => { 

    const totGenres = state.SRC === 'movies' ? state.movieGenres : state.TvGenres;

    return { totGenres };
} 


export default connect(mapStateToProps)(ItemSlide);