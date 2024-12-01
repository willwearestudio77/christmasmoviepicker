import { MovieContext } from "./State"
import { useContext } from "react";
function Recommendations() {
    const { movies } = useContext(MovieContext);
    console.log('Movies in the recomendations:', movies.results);
  return (
    <div>
        {movies.results && movies.results.map((movie) => {
            return (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>
            )
        })}
    </div>
  )
}

export default Recommendations