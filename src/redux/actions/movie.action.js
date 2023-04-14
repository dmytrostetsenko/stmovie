import TMDBServices from "../../services/TMDBServices";
const { fetchMovie } = TMDBServices();

export const fetchMovieListThunk = () => (dispatch) => {
	fetchMovie("/discover/movie").then((res) =>
		dispatch({
			type: "FETCH_MOOVIES",
			payload: res,
		})
	);
};
