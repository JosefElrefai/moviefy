import { Fragment, useEffect, useState } from 'react';

const AutoCmpltTxt = (props) => {

    const [suggestions, setSuggestions] = useState([]);
    const { inputValue } = props;
    
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if(inputValue < 2){
                (suggestions.length !== 0) && setSuggestions([]);
            }
            else {
                (async () => {
                    const suggList = await props.getSuggestionList(inputValue);
                    setSuggestions(suggList);
                })();
            }
        }, 500);
        
        return () => {
            clearTimeout(timeOutId);
        };

    }, [inputValue]);

    const renderSuggestions = () => {
        if (suggestions.length === 0) return null;
        return (
            <ul>
                {suggestions.map( suggestion => <li key={suggestion} >{suggestion}</li> )}
            </ul>
        );
    }

    return (
        <Fragment>
            {props.children()}
            {renderSuggestions()}
       </Fragment>
    );
}

export default AutoCmpltTxt;