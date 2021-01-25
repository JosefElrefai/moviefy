/**@jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash'; 

const AutoCmpltTxt = (props) => {

    const [suggestions, setSuggestions] = useState([]);
    const { inputValue } = props;
    const containerRef = useRef();
    const skipSuggestions = useRef(false);

    //calculates suggestions & throttles API requests
    useEffect(() => {
        if(skipSuggestions.current) return skipSuggestions.current = false;

        const timeOutId = setTimeout(() => {
            if(inputValue.length < 3){
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

    //handles clicks outside dropDown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if(e.target.localName === 'a') return;
            if(!containerRef.current.contains(e.target)){
                setSuggestions([]);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside)
        };
    }, [])

    const focusSugg = (e) => {
        e.target.focus();
    }

    const selectSugg = () => { //selects focused sugg
        props.changeInputV(document.activeElement.innerText);
        skipSuggestions.current = true;
        setSuggestions([]);
    }

    const handleDrpDKeyP = (e) => {
        if (e.code === 'Enter'){
            return selectSugg();
        }

        if(e.code === 'ArrowUp' || e.code === 'ArrowDown' ){
            e.preventDefault();
            const focusedElement = document.activeElement; 

            if(e.code === 'ArrowUp') {
                focusedElement.previousElementSibling ?
                focusedElement.previousElementSibling.focus()
                : focusedElement.parentElement.parentElement.firstChild.focus(); //focus back at input

            } else focusedElement.nextElementSibling && focusedElement.nextElementSibling.focus();

        }
        if(containerRef.current.children[1] && containerRef.current.children[1].contains(document.activeElement)){
            if([38,40].includes(e.keyCode)) return;
            containerRef.current.children[0].focus();
        }
    }

    const handleContKeyD = (e) => {
        if(e.target.localName === 'li') return;
        if(e.code === 'ArrowDown'){
            e.preventDefault();
            e.target.nextElementSibling && e.target.nextElementSibling.firstChild.focus();
        } 
    }

    const renderSuggestions = () => {
        if (suggestions.length === 0) return null;

        const uniqSugg = _.uniq(suggestions);
        const showSugg = uniqSugg.filter((v, i) => i < 8);
        const inputHeigth = containerRef.current.children[0].offsetHeight;
        return (
            <Dropdown inptHeight={inputHeigth} onKeyDown={(e) => handleDrpDKeyP(e) } onClick={() => selectSugg()} >
                {showSugg.map(sugg => (
                    <li
                        key={sugg}
                        css={suggCSS}
                        tabIndex="0"
                        onMouseEnter={(e) => focusSugg(e)}> {sugg} </li>
                ))}
            </Dropdown>
        );
    }

    return (
        <span ref={containerRef} css={containerCSS} className={props.className} onKeyDown={(e) => handleContKeyD(e)}  >
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
    overflow: hidden;
    width: 100%;
    left: 0;
    top: calc(${props => props.inptHeight}px + 4px);
    background: #131517;
    border: .5px solid grey;
    border-radius: 3px;
    box-shadow: 0px 2px 10px #111;
    text-align: left;
`;

const suggCSS = css`
    padding: .3rem .2rem;
    font-size: .9rem;
    &:focus{
    background: #3a86ff;
        outline: none;
    }
`;

export default AutoCmpltTxt;