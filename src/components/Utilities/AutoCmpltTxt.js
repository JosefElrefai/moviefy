import { Fragment, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import movieDB from '../../apis/movieDB';

export default (props) => {

    const [suggestions, setSuggestions] = useState([]);

    
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if(props.inputValue < 2){
                (suggestions.length !== 0) && setSuggestions([]);
            }
            else props.getSuggestionList(props.inputValue);
        }, 500);
        
        return () => {
            clearTimeout(timeOutId);
        };

    }, [props.inputValue]);

    const renderSuggestions = (suggestions) => {
        if (suggestions.length === 0) return null;
        return (
            <ul>
                {suggestions.map( suggestion => <li>{suggestion}</li> )}
            </ul>
        );
    }

    return (
        <Fragment>
            {props.children()}
        </Fragment>
    );
}