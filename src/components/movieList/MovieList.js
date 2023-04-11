import { useEffect, useState } from "react";
import TMDBServices from "../../services/TMDBServices";
import MovieCard from "../movieCard/MovieCard";

const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const { fetchMovie } = TMDBServices();

	const onMoviesLoaded = async (movies) => {
		setMovies(movies);
	};

	useEffect(() => {
		fetchMovie().then(onMoviesLoaded);
	}, []);

	return (
		<ul className="movies">
			{console.log(movies)}
			{movies.map((movie) => (
				<MovieCard movie={movie} key={movie.id} />
			))}
		</ul>
	);
};

export default MovieList;
