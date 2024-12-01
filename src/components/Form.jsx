import { useForm } from "react-hook-form";
import fetchMovies from "../functions/Searcher.jsx";
import { useContext } from "react";
import { MovieContext } from "./State";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { setMovies } = useContext(MovieContext);

  const onSubmit = (data) => {
    console.log(data);
    fetchMovies(data).then((movies) => setMovies(movies));
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register("name")} />
      <label>Email</label>
      <input type="email" {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <select type="select" {...register("time")}>
        <option value="60">Less than 60 minutes</option>
        <option value="120">Up to 2 hours</option>
        <option value="400">Over 2 hours</option>
      </select>
      <select type="select" {...register("moviecertificate")}>
        <option value="U">U</option>
        <option value="PG">PG</option>
        <option value="12A">12A</option>
        <option value="15">15</option>
        <option value="18">18</option>
      </select>
      <select type="select" {...register("genre")}>
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
      <input type="submit" />
    </form>
  );
}
