import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MovieContext } from "./State";
import FetchMovies from "../functions/Searcher";
export default function Form() {
    const { register, handleSubmit } = useForm();
    const { setMovies,setLoading,loading,setPage,setError,setTotalPages,page,request,setRequest } = useContext(MovieContext);

    const onSubmit = (data) => {
        console.log(data);
        setRequest(data);
        setLoading(true);
        setPage(1);
        setError(null);
        console.log(data);
        FetchMovies(data,page)
            .then(movies => {
                console.log(request);
            setMovies(movies);
            setTotalPages(movies.total_pages);
            setLoading(false);
            })
            .catch(error => {
            setError(error);
            setLoading(false);
            });
    };
    


    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <select className="select select-bordered w-full " type="select" {...register("time")} >
                <option value="60">Less than 60 minutes</option>
                <option value="120">Up to 2 hours</option>
                <option value="400">No max time</option>
            </select>
            <select className="select select-bordered w-full " type="select" {...register("moviecertificate")} >
                <option value="U">U</option>
                <option value="PG">PG</option>
                <option value="12A">12A</option>
                <option value="15">15</option>
                <option value="18">18</option>
            </select>
            <select className="select select-bordered w-full " type="select" {...register("genre")} >
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
            <button className="btn p-4 bg-red-500 text-black" type="submit">{loading ? <span className="loading loading-spinner loading-sm text-black"></span>
 : 'Find me a movie!'}
            </button>
        </form>
    );
}