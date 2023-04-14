import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieListThunk } from "../../redux/actions/movie.action";
import MovieCard from "../movieCard/MovieCard";
import { Grid } from "@mui/material";

const MovieList = () => {
	const { movieList } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovieListThunk());
	}, []);

	return (
		<Grid container spacing={2} mt={2}>
			{movieList.map((movie) => (
				<Grid item key={movie.id} xs={12} sm={6} md={3}>
					<MovieCard movie={movie} />
				</Grid>
			))}
		</Grid>
	);
};

export default MovieList;
