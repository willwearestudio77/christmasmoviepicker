import { useState } from "react";
import ApiCall from "./apicall"; //name before change
import Time from "./Time";
import axios from "axios";

const CombinedSearch = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [ageRating, setAgeRating] = useState("");
  const [runtime, setRuntime] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = "811cd317824b0a7e5bb9c01c48165283";

  const runtimeConditions = {
    "<60": { "with_runtime.lte": 60 },
    "60-90": { "with_runtime.gte": 60, "with_runtime.lte": 90 },
    ">90": { "with_runtime.gte": 90 },
  };

  const handleSearch = async () => {
    const params = {
      api_key: apiKey,
      ...(selectedGenre && { with_genres: selectedGenre }),
      ...(ageRating && {
        certification_country: "US",
        certification: ageRating,
      }),
      ...(runtime && runtimeConditions[runtime]),
    };

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie`,
        { params }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  //   return (
  //     <div>
  //       <h1>Movie Picker</h1>
  //       <ApiCall onGenreChange={setSelectedGenre} />
  //       <Age onAgeChange={setAgeRating} />
  //       <Time onRuntimeChange={setRuntime} />
  //       <button onClick={handleSearch}>Search</button>

  //       {movies.length > 0 && (
  //         <ul>
  //           {movies.map((movie) => (
  //             <li key={movie.id}>
  //               {movie.title} - {movie.release_date || "Unknown Release Date"}
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //     </div>
  //   );
};

export default CombinedSearch;
