import movieDB from '../../../../apis/movieDB';

export default async ( movieSearchValues ) => {

    const { sort_by, with_people, genres, with_keywords } = movieSearchValues;
    console.log(movieSearchValues);
    const respAPiValues = { sort_by };

    const getKeywordId = async (query) => {
        const resp = await movieDB.get('/search/keyword', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                query: query
            }
        });

        if( resp.data.total_results === 0 ){
            return null;
        }

        return resp.data.results.find(kWord => kWord.name === with_keywords).id;
    }

    const getPersonID = async (query) => {
        const resp = await movieDB.get('/search/person', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                query: query
            }
        });

        if( resp.data.total_results === 0 ){
            return null;
        }

        return resp.data.results.find(person => person.name.toUpperCase() === with_people.toUpperCase()).id;
    }


    await Promise.all(
        [
            !!with_keywords && ( respAPiValues.with_keywords = await getKeywordId(with_keywords) ),
            !!with_people && ( respAPiValues.with_people = await getPersonID(with_people))
        ]
    );

    return respAPiValues;
    
};