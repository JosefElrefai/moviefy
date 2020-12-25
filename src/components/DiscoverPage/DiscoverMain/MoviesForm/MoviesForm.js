import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const MoviesForm = () => {

    const history = useHistory(); //put history in file
    const [formValues, setFormValues] = useState( { sort_by: '', people_inv: '' } );

    const ck = (e) => {
        e.preventDefault();

        history.push(`?movieNamee=asd`);
    };

    const handleInputChange = (e) => {
        console.log(formValues);
        setFormValues( { formValues... ,[e.target.name]: e.target.value } )
    }

    return (
        <form style={{textAlign: 'center'}} > 
            <select name="sort_by" >
                <option>Sort By</option>
                <option value="moslyyy" >Most Popular</option>
                <option>Most Revenue</option>
                <option>Release Date</option>
                <option>malo</option>
                <option>malo</option>
                <option>malo</option>
            </select>

            <input type="text" name="people_inv" placeholder="people inv." value={formValues.people_inv} onChange={handleInputChange} ></input>

            <button  >
                submit 
            </button>
        </form>
    );
}

export default MoviesForm;