import { useState } from "react";
import axios from "axios";

const RuntimeRange = () => {
  const [selectedRange, setSelectedRange] = useState(""); // To store the selected time range
  const [movies, setMovies] = useState([]); // To store the fetched movies

  const apiKey = "811cd317824b0a7e5bb9c01c48165283";

  // Handle movie search by runtime range
  const handleSearch = async () => {
    if (!selectedRange) {
      alert("Please select a time range!");
      return;
    }

    // Map the selected range to runtime parameters
    const runtimeParams = {
      "<60": { with_runtime_lte: 60 },
      "60-90": { with_runtime_gte: 60, with_runtime_lte: 90 },
      ">90": { with_runtime_gte: 90 },
    };

    const params = runtimeParams[selectedRange];

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
        { params }
      );
      setMovies(response.data.results); // Set the movies in state
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <h1>Filter by Runtime Range</h1>
      <div>
        <label>
          Time Range:
          <select
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
          >
            <option value="">Select a Time Range</option>
            <option value="<60">Less than 60 minutes</option>
            <option value="60-90">60 to 90 minutes</option>
            <option value=">90">More than 90 minutes</option>
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

export default RuntimeRange;
