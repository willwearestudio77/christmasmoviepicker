import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" {...register("name")} />

            {/* include validation with required or other standard HTML validation rules */}
            <label>Email</label>
            <input type="email" {...register("email", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.email && <span>This field is required</span>}
            <select type="select" {...register("time")} >
                <option value=">60">Less than 60 minutes</option>
                <option value="1-2">1 to 2 hours</option>
                <option value="2+">Over 2 hours</option>
            </select>
            <select type="select" {...register("moviecertificate")} >
                <option value="U">U</option>
                <option value="PG">PG</option>
                <option value="12A">12A</option>
                <option value="15">15</option>
                <option value="18">18</option>
            </select>
            <select type="select" {...register("genre")} >
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
            </select>
            <input type="submit" />
        </form>
    );
}