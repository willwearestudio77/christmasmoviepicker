import { useContext, useEffect } from "react";
import { MovieContext } from "./State";
import FetchMovies from "../functions/Searcher";

function Recommendations() {
  const { movies, setMovies, page, setPage, totalPages, request } = useContext(MovieContext);

  // Debugging useEffect to monitor state changes
  useEffect(() => {
    console.log("Movies updated:", movies);
  }, [movies]);

  useEffect(() => {
    console.log("Page updated:", page);
  }, [page]);

  const paginateFunction = async (newPage) => {
    try {
      const data = await FetchMovies(request, newPage);
      setPage(newPage); // Update current page
      setMovies(data);  // Update movies in the context
    } catch (error) {
      console.error("Error during pagination:", error);
    }
  };

  if (!movies || !movies.results || movies.results.length === 0) {
    return <p>No Christmas films in this category</p>;
  }

  return (
    <div className="recommendations max-w-screen-sm m-auto flex flex-col gap-10 p-10">
      {page > 1 && (
        <button className="btn btn-primary" onClick={() => paginateFunction(page - 1)}>
          Previous
        </button>
      )}
      {page < totalPages && (
        <button className="btn btn-primary" onClick={() => paginateFunction(page + 1)}>
          Next
        </button>
      )}
      <p>Total Pages: {totalPages}</p>
      <p>Page: {page}</p>
      {movies.results.map((movie) => (
        <div key={movie.id} className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}/10</p>
          </div>
          {movie.poster_path ? (
            <figure>
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </figure>
          ) : (
            <p>No image available</p>
          )}
        </div>
      ))}
      {page > 1 && (
        <button className="btn btn-primary" onClick={() => paginateFunction(page - 1)}>
          Previous
        </button>
      )}
      {page < totalPages && (
        <button className="btn btn-primary" onClick={() => paginateFunction(page + 1)}>
          Next
        </button>
      )}
    </div>
  );
}

export default Recommendations;
