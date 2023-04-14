import TMDBServices from "../../services/TMDBServices";
const { fetchMovie, searchByName } = TMDBServices();

export const fetchMovieListThunk = (page) => (dispatch) => {
	fetchMovie(page).then((res) =>
		dispatch({
			type: "FETCH_MOVIES",
			payload: res,
		})
	);
};

export const searchMovieThunk = (name) => (dispatch) => {
	searchByName(name).then((res) => {
		dispatch({
			type: "SEARCH_MOVIES",
			payload: res,
		});
	});
};

export const selectMovie = (movie) => (dispatch) => {
	dispatch({
		type: "SELECT_MOVIE",
		payload: movie,
	});
};
