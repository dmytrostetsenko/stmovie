import TMDBServices from "../../services/TMDBServices";
const { fetchMovieList, searchByName, fetchMovie } = TMDBServices();

export const fetchMovieListThunk = (page) => (dispatch) => {
	fetchMovieList(page).then((res) =>
		dispatch({
			type: "FETCH_MOVIES",
			payload: res,
		})
	);
};

export const fetchMovieThunk = (id) => (dispatch) => {
	fetchMovie(id).then((res) => {
		dispatch({
			type: "SELECT_MOVIE",
			payload: res,
		});
	});
};

export const searchMovieThunk = (name) => (dispatch) => {
	searchByName(name).then((res) => {
		dispatch({
			type: "SEARCH_MOVIES",
			payload: res,
		});
	});
};
