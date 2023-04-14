import TMDBServices from "../../services/TMDBServices";
const { fetchMovie } = TMDBServices();

export const fetchMovieListThunk = () => (dispatch) => {
	fetchMovie("/discover/movie").then((res) =>
		dispatch({
			type: "FETCH_MOVIES",
			payload: res,
		})
	);
};

export const selectMovie = (movie) => (dispatch) => {
	dispatch({
		type: "SELECT_MOVIE",
		payload: movie,
	});
};
