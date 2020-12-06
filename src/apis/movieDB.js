import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


//movie/top_rated?api_key=28a77d847a47c617ab081d7a68e94dc9&language=en-US&page=1