import movieDB from '../../../../apis/movieDB';

export default async ( movieSearchValues ) => {

    const { sort_by, with_people, with_genres, with_keywords } = movieSearchValues;
    console.log(movieSearchValues);
    const respAPiValues = { sort_by, with_genres };

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

        const keyWord = resp.data.results.find(kWord => kWord.name.toUpperCase() === with_keywords.toUpperCase());
        if(!keyWord){
            return null;
        }

        return keyWord.id;
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

        let person = resp.data.results.find(actor => actor.name.toUpperCase() === with_people.toUpperCase());
        if(!person){

            if(resp.data.total_results < 6){
                person = resp.data.results[0];
            } else{
                return null;
            }  
        }

        return person.id;
    }

    


    await Promise.all(
        [
            !!with_keywords && ( respAPiValues.with_keywords = await getKeywordId(with_keywords) ),
            !!with_people && ( respAPiValues.with_people = await getPersonID(with_people))
        ]
    );

    return respAPiValues;
    
};