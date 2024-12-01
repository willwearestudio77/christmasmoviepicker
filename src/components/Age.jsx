const Age = ({ onAgeChange }) => {
  //   const [ageRating, setAgeRating] = useState("");
  //   const [movies, setMovies] = useState([]);

  //   const apiKey = "811cd317824b0a7e5bb9c01c48165283";

  //   const handleSearch = async () => {
  //     if (!ageRating) {
  //       alert("Please select an age rating!");
  //       return;
  //     }

  //     try {
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&certification_country=US&certification=${ageRating}`
  //       );
  //       setMovies(response.data.results);
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     }
  //   }; handled elsewhere... is this duplication we now don't need in the combined form

  return (
    <div>
      <label>
        Age Rating:
        <select onChange={(e) => onAgeChange(e.target.value)}>
          <option value="">Select Age Rating</option>
          <option value="G">G - General Audiences</option>
          <option value="PG">PG - Parental Guidance</option>
          <option value="PG-13">PG-13 - Parents Strongly Cautioned</option>
          <option value="R">R - Restricted</option>
          <option value="NC-17">NC-17 - Adults Only</option>
        </select>
      </label>
    </div>
  );
};

export default Age;
