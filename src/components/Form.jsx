import { useForm } from "react-hook-form";
import fetchMovies from "../functions/searcher";

export default function Form({ onSearch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    fetchMovies(data).then((movies) => {
      console.log("Fetched Movies:", movies);
      if (onSearch) {
        onSearch(movies.results || []); // Pass fetched movies back to parent
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Runtime:
        <select {...register("time")} defaultValue="60">
          <option value="60">Less than 60 minutes</option>
          <option value="120">Up to 2 hours</option>
          <option value="400">Over 2 hours</option>
        </select>
      </label>

      <label>
        Certification:
        <select {...register("moviecertificate")} defaultValue="PG">
          <option value="U">U</option>
          <option value="PG">PG</option>
          <option value="12A">12A</option>
          <option value="15">15</option>
          <option value="18">18</option>
        </select>
      </label>

      <label>
        Genre:
        <select {...register("genre")} defaultValue="28">
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Sci-Fi</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </select>
      </label>

      {/* Example of adding validation */}
      <label>
        Name:
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
      </label>
      {errors.name && <span>{errors.name.message}</span>}

      <label>
        Email:
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
        />
      </label>
      {errors.email && <span>{errors.email.message}</span>}

      <input type="submit" value="Search" />
    </form>
  );
}
