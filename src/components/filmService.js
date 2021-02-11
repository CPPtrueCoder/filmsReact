import axios from 'axios'


 export default class FilmService {

 _apiBase = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"; 

 getMovies = async ()=>{
    const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        this._apiBase
      );
      return movies
    
    };
 }
    
