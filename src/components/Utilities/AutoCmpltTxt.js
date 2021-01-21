/**@jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';

const AutoCmpltTxt = (props) => {

    const [suggestions, setSuggestions] = useState([]);
    const { inputValue } = props;
    const containerRef = useRef();
    
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
        
        const uniqSugg = _.uniq(suggestions);
        const showSugg = uniqSugg.filter((v, i) => i < 8);

        const inputHeigth = containerRef.current.children[0].offsetHeight;
        return (
            <Dropdown inptHeight={inputHeigth} >
                {showSugg.map( sugg => <li key={sugg} >{sugg}</li> )}
            </Dropdown>
        );
    }

    return (
        <span ref={containerRef} css={containerCSS} className={props.className}>
            {props.children()} {/* input element, controlled outside this component*/}
            {renderSuggestions()}
       </span>
    );
}

const containerCSS = css`
    position: relative;
    display: inline-block;

`;

const Dropdown = styled.ul`
    position: absolute;
    width: 100%;
    left: 0;
    top: ${props => props.inptHeight}px;
    background: #131517;
    border: .5px solid grey;
`;

export default AutoCmpltTxt;