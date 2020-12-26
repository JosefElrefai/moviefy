import React from 'react';


class DiscoverMovies extends React.Component{

    // useEffect(() => { //put in DiscoverMovies components
    //     const searchParams = new URLSearchParams(queryString);
    //     console.log(movieSearchValues.current);

    //     for (const [key, value] of searchParams) {

    //         movieSearchValues.current[key] = value;
    //     }

    // }, [queryString]);

    render(){

        return (
            <div className="discover-grid" >
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
                <div className="moff"></div>
            </div>
        );
    }
}

export default DiscoverMovies;