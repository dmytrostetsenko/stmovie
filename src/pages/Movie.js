import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieThunk } from "../redux/actions/movie.action";
import { Grid } from "@mui/material";

import MoviePoster from "../components/moviePoster/MoviePoster";
import MovieDetails from "../components/movieDetails/MovieDetails";
const Movie = () => {
	const { id } = useParams();
	const { selectedMovie } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMovieThunk(id));
	}, [id]);

	const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
	return (
		<>
			{selectedMovie && (
				<Grid container mt={4} spacing={3} justifyContent="center">
					<Grid item xs={8} sm={4}>
						<MoviePoster
							image={`${IMAGE_PATH}${selectedMovie.poster_path}`}
						/>
					</Grid>
					<Grid item xs={12} sm={8}>
						<MovieDetails movie={selectedMovie} />
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default Movie;
