import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button } from "@mui/material";
import { fetchMovieListThunk } from "../../redux/actions/movie.action";
import MovieCard from "../movieCard/MovieCard";
import SearchForm from "../searchForm/SearchForm";

const MovieList = () => {
	const { movieList } = useSelector((state) => state);
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovieListThunk(page));
	}, [page]);

	const loadMoreMovies = () => {
		setPage(page + 1);
	};

	return (
		<>
			<SearchForm />
			<Grid container spacing={2} mt={2}>
				{movieList.map((movie) => (
					<Grid item key={movie.id} xs={12} sm={6} md={3}>
						<MovieCard movie={movie} />
					</Grid>
				))}
			</Grid>
			<Button
				onClick={loadMoreMovies}
				sx={{ margin: "20px auto", display: "block" }}
				variant="contained"
			>
				Load More
			</Button>
		</>
	);
};

export default MovieList;
