import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = (fetchedMovies) => {
    setMovies(fetchedMovies); // Update movies state with fetched results
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <Form onSearch={handleSearch} />
      </div>
      <div className="movies-container">
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.release_date || "Release date not available"}</p>
                <p>{movie.overview || "No description available"}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found. Please try searching with different criteria.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
