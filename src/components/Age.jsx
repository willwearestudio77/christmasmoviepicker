import { useState } from "react";
import axios from "axios";

const Age = () => {
  const [ageRating, setAgeRating] = useState(""); // To store the selected age rating
  const [movies, setMovies] = useState([]); // To store the fetched movies

  const apiKey = "811cd317824b0a7e5bb9c01c48165283";

  // Handle movie search by age rating
  const handleSearch = async () => {
    if (!ageRating) {
      alert("Please select an age rating!");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&certification_country=US&certification=${ageRating}`
      );
      setMovies(response.data.results); // Set the movies in state
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <h1>Filter by Age Rating</h1>
      <div>
        <label>
          Age Rating:
          <select
            value={ageRating}
            onChange={(e) => setAgeRating(e.target.value)}
          >
            <option value="">Select Age Rating</option>
            <option value="G">G - General Audiences</option>
            <option value="PG">PG - Parental Guidance</option>
            <option value="PG-13">PG-13 - Parents Strongly Cautioned</option>
            <option value="R">R - Restricted</option>
            <option value="NC-17">NC-17 - Adults Only</option>
          </select>
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>

      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Age;
