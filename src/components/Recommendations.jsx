import { MovieContext } from "./State"
import { useContext } from "react";
function Recommendations() {
    const { movies } = useContext(MovieContext);
    // Check if movies.results exists and has content
    if (!movies || !movies.results || movies.results.length === 0) {
      return <p>No christmas films in this category</p>;
    }
    return (
      <div className="recommendations">
        {movies.results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-content">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Rating:{movie.vote_average}/10</p>
            </div>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        ))}
      </div>
    );
  }

export default Recommendations