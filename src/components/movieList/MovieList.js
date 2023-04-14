import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieListThunk } from "../../redux/actions/movie.action";
import MovieCard from "../movieCard/MovieCard";

const MovieList = () => {
	const { movieList } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovieListThunk());
	}, []);

	return (
		<ul className="movies">
			{movieList.map((movie) => (
				<MovieCard movie={movie} key={movie.id} />
			))}
		</ul>
	);
};

export default MovieList;
