import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from "./components/Movie";
import "./App.css";
import FilmService from "./components/filmService";

const  App= ()=> {
 

  const [isLoading,setLoading] = useState(true);
  const [movies,setMovies] = useState ([])
  const  filmService = new FilmService()
  
  
  const getMovies = async () => {
    const movies =  await filmService.getMovies();
    
    setMovies(movies);

  };

  useEffect(() => {
    getMovies();
    setLoading(false)
    
  });
  

 
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Загрузка...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary.slice(0,140)}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }


 export default App;