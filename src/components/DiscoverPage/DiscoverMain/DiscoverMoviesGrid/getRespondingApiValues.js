export default async ( movieSearchValues ) => {

    const { sort_by, people_inv, genres, key_words } = movieSearchValues;
    const respAPiValues = {};

    !!key_words && ( respAPiValues.key_words = await getKeywordId(key_words) );
    !!people_inv && ( respAPiValues.people_inv = await getPersonID(people_inv)); // bad way fix 

    
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

        return resp.data.results.find(kWord => kWord.name === key_words).id;
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

        return resp.data.results.find(kWord => kWord.name === key_words).id;
    }
    
};