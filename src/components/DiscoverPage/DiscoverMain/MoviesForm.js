import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const MoviesForm = () => {

    const history = useHistory(); //put history in file

    //default form values, keys must be equal to name tag of responding element
    const [formValues, setFormValues] = useState( { sort_by: '', with_people: '', genres: '', with_keywords: ''  } );

    const clearFormValues = () => {
            setFormValues( { sort_by: '', with_people: '', genres: '', with_keywords: ''} )
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

            <select name="sort_by" value={formValues.sort_by} onChange={handleFormChange} className="form-comp" au >
                <option value="" >Sort By</option>
                <option value="popularity.desc" >Most Popular</option>
                <option value="vote_average.desc" >Highest Rating</option>
                <option value="revenue.desc" >Highest Revenue</option>
                <option value="release_date.desc" >Release Date</option>
            </select>

            <input
                type="text"
                name="with_people"
                placeholder="People inv."
                value={formValues.with_people}
                onChange={handleFormChange}
                autoComplete="off"
                className="form-comp"
            ></input>

            <input
                type="text"
                name="genres"
                placeholder="Genres"
                value={formValues.genres}
                onChange={handleFormChange}
                autoComplete="off"
                className="form-comp"
            ></input>

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