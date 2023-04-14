import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieThunk } from "../redux/actions/movie.action";
const Movie = () => {
	const { id } = useParams();
	const { selectedMovie } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMovieThunk(id));
	}, [id]);

	const {
		overview,
		title,
		poster_path,
		original_language,
		budget,
		runtime,
		release_date,
		vote_average,
		genres,
	} = selectedMovie;
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
	return (
		<>
			<h1>{title}</h1>
			<img src={`${IMAGE_PATH}${poster_path}`} alt={title} />
			<p>{overview}</p>
			<span>Language: {original_language}</span>
			<span>Budget: {budget}$</span>
			<span>Runtime: {runtime} min</span>
			<span>Released date: {release_date}</span>
			<span>Rating: {vote_average}</span>
			<ul>
				{genres?.map((genre) => (
					<li key={genre.id}>{genre.name}</li>
				))}
			</ul>
		</>
	);
};

export default Movie;
