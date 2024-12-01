//although this is called ApiCall, this is just genre.

import { useState, useEffect } from "react";
import axios from "axios";

const ApiCall = ({ onGenreChange }) => {
  const [genres, setGenres] = useState([]);
  //   const [selectedGenre, setSelectedGenre] = useState("");
  //   const [movies, setMovies] = useState([]);

  const apiKey = "811cd317824b0a7e5bb9c01c48165283";

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
        //might need a proper handler here
      }
    };

    fetchGenres();
  }, []);

  //   const handleSearch = async () => {
  //     if (!selectedGenre) {
  //       alert("Please select a genre!");
  //       return;
  //     }

  //     try {
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}`
  //       );
  //       setMovies(response.data.results);
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     }
  //   }; now handled elsewhere

  return (
    <div>
      <label>
        Genre:
        <select onChange={(e) => onGenreChange(e.target.value)}>
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ApiCall;
