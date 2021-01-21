import { useEffect } from "react"

const ClickOutside = (ref) => {
    let returnValue = false;
    useEffect(() => {
        const handleClick = (e) => {
            if(ref.current && !ref.current.contains(e.target)){
                returnValue = true;
                alert(returnValue)
            }
        }

        document.addEventListener('click', (e) => handleClick(e));
        return () => {
            document.removeEventListener('click', (e) => handleClick(e));
        };
    }, [ref])

    return returnValue;
}

export default ClickOutside;