import { MovieContext } from "./State";
import { useContext } from "react";

function Recommendations() {
  const { movies } = useContext(MovieContext);

  if (!movies || !movies.results || movies.results.length === 0) {
    return <p>No christmas films in this category</p>;
  }

  return (
    <div className="recommendations">
      {movies.results.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h2>{movie.title}</h2>
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

export default Recommendations;
