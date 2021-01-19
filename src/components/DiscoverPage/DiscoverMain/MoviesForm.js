import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import AutoCmpltTxt from '../../Utilities/AutoCmpltTxt';
import movieDB from '../../../apis/movieDB';

const MoviesForm = () => {

    const history = useHistory(); //put history in file

    //default form values, keys must be equal to name tag of responding element
    const [formValues, setFormValues] = useState( { sort_by: '', with_people: '', with_genres: '', with_keywords: ''  } );

    const clearFormValues = () => {
            setFormValues( { sort_by: '', with_people: '', with_genres: '', with_keywords: ''} )
    }

    const calcURLSearchStr = () => {
        let urlSearchString = '?';
        let andSign = ''; //sets after first loop

        for (const [key, value] of Object.entries(formValues)) {
            value !== '' && (urlSearchString += `${andSign}${key}=${value}` );
            andSign = '&';
        }

        return urlSearchString;
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //IMPLEMENT VALIDATION
        history.push(calcURLSearchStr());
        clearFormValues();
    };

    const handleFormChange = (e) => {
        setFormValues( { ...formValues, [e.target.name]: e.target.value } );
    };

    const getActorSuggestions = async (query) => {
        const resp = await movieDB.get('search/person', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                query: query
            }
        });
        return resp.data.results.map(person => person.name);
    };

    return (
        <form onSubmit={handleSubmit} className="discover-form" > 

            <select name="sort_by" value={formValues.sort_by} onChange={handleFormChange} className="form-comp" >
                <option value="" >Sort By</option>
                <option value="popularity.desc" >Most Popular</option>
                <option value="vote_average.desc" >Highest Rating</option>
                <option value="revenue.desc" >Highest Revenue</option>
                <option value="release_date.desc" >Release Date</option>
            </select>

            <select name="with_genres" value={formValues.with_genres} onChange={handleFormChange} className="form-comp"  >
                <option value="">Genres</option>
                <option value="28">Action</option>
                <option value="12">Adventure</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="80">Crime</option>
                <option value="99">Documentary</option>
                <option value="18">Drama</option>
                <option value="10751">Family</option>
                <option value="14">Fantasy</option>
                <option value="36">History</option>
                <option value="27">Horror</option>
                <option value="10402">Music</option>
                <option value="9648">Mystery</option>
                <option value="10749">Romance</option>
                <option value="878">Science Fiction</option>
                <option value="53">Thriller</option>
                <option value="10752">War</option>
                <option value="37">Western</option>
            </select>
            
            <AutoCmpltTxt getSuggestionList={getActorSuggestions} inputValue={formValues.with_people} >
                {() => (
                    <input
                        type="text"
                        name="with_people"
                        placeholder="People inv."
                        value={formValues.with_people}
                        onChange={handleFormChange}
                        autoComplete="on"
                        className="form-comp"
                    ></input>
                )}
            </AutoCmpltTxt>

            <input
                type="text"
                name="with_keywords"
                placeholder="Keywords"
                value={formValues.with_keywords}
                onChange={handleFormChange}
                autoComplete="off"
                className="form-comp"
            ></input>


            <button className="form-comp submit" >
                FIND
            </button>
        </form>
    );
}

export default MoviesForm;