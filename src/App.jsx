import "./App.css";
<<<<<<< HEAD
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
=======
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import { MovieProvider } from "./components/State";
import Recommendations from "./components/Recommendations";
function App() {
  return (
    <>
      <MovieProvider>
        <Header />
        <div className="form-container">
          <Form />
        </div>
        <div className="movies-container">
          {/* <Movies /> */}
          <Recommendations />
        </div>
        <Footer />
      </MovieProvider>
>>>>>>> 01f55f07972c4f47f77457b0bdfd9a062d99d0f5
    </>
  );
}

export default App;
