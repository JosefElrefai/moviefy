import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const MoviesForm = () => {

    const history = useHistory(); //put history in file

    //default form values, keys must be equal to name tag of responding element
    const [formValues, setFormValues] = useState( { sort_by: '', people_inv: '', genres: '', key_words: ''  } );

    const clearFormValues = () => {
            setFormValues( { sort_by: '', people_inv: '', genres: '', key_words: ''} )
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
    }

    return (
        <form onSubmit={handleSubmit} className="discover-form" > 

            <select name="sort_by" value={formValues.sort_by} onChange={handleFormChange} className="form-comp">
                <option value="" >Sort By</option>
                <option value="popular" >Most Popular</option>
                <option value="rating" >Highest Rating</option>
                <option value="revenue" >Highest Revenue</option>
                <option value="latest" >Release Date</option>
            </select>

            <input
                type="text"
                name="people_inv"
                placeholder="People inv."
                value={formValues.people_inv}
                onChange={handleFormChange}
                className="form-comp"
            ></input>

            <input
                type="text"
                name="genres"
                placeholder="Genres"
                value={formValues.genres}
                onChange={handleFormChange}
                className="form-comp"
            ></input>

            <input
                type="text"
                name="key_words"
                placeholder="Keywords"
                value={formValues.key_words}
                onChange={handleFormChange}
                className="form-comp"
            ></input>


            <button className="form-comp submit" >
                FIND
            </button>
        </form>
    );
}

export default MoviesForm;