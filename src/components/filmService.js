import axios from 'axios'


 export default class FilmService {

 _apiBase = "https://yts.mx/api/v2/list_movies.jsonsort_by=rating"; 

 getMovies = async ()=>{
    const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        this._apiBase
      );
      console.log(movies)
      return movies
      
    
    };
 }
    
