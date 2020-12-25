import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const MoviesForm = () => {

    const history = useHistory(); //put history in file
    const [formValues, setFormValues] = useState( { sort_by: '', people_inv: '' } ); //default form values



    const getURLSearchStr = () => {
        let urlSearchString = '?';
        let andSign = ''; //sets after first loop

        for (const [key, value] of Object.entries(formValues)) {
            value !== '' && (urlSearchString += `${andSign}${key}=${value}` );
            andSign = '&';
        }

        return urlSearchString;
    }

    const ck = (e) => {
        e.preventDefault();
        getURLSearchStr();

        history.push(getURLSearchStr());
    };

    const handleFormChange = (e) => {
        setFormValues( { ...formValues, [e.target.name]: e.target.value } );
    }

    console.log(formValues)
    return (
        <form style={{textAlign: 'center'}} > 

            <select name="sort_by" value={formValues.sort_by} onChange={handleFormChange} >
                <option value="" >Sort By</option>
                <option value="popular" >Most Popular</option>
                <option value="revenue" >Most Revenue</option>
                <option value="latest" >Release Date</option>
            </select>

            <input
                type="text"
                name="people_inv"
                placeholder="People inv."
                value={formValues.people_inv}
                onChange={handleFormChange}
            ></input>

            <button onClick={ck} >
                submit 
            </button>
        </form>
    );
}

export default MoviesForm;