import { MovieContext } from "./State"
import { useContext } from "react";
function Recommendations() {
  const { movies,setPage,page,totalPages } = useContext(MovieContext);
  if (!movies || !movies.results || movies.results.length === 0) {
    return <p>No christmas films in this category</p>;
  }
  return (
    <div className="recommendations max-w-screen-sm m-auto flex flex-col gap-10">
      {page > 1 && (<button className="btn btn-primary" onClick={() => setPage(page - 1)}>Previous</button>)}
      {page < totalPages && (<button className="btn btn-primary" onClick={() => setPage(page + 1)}>Next</button>)}
      <p>total pages:{totalPages}</p>
      <p></p>{page}
      {movies.results.map((movie) => (
        <div key={movie.id} className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Rating:{movie.vote_average}/10</p>
          </div>
          {movie.poster_path ? (
            <figure>
              <img
              className="w-full"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title} />
            </figure>
          ) : (
            <p>No image available</p>
          )}
        </div>
      ))}
      {movies.total_pages > 1 && (<button className="btn btn-primary">Load more</button>)}
    </div>
  );
}

export default Recommendations

