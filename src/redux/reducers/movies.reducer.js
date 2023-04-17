const initialState = {
	movieList: [],
	selectedMovie: null,
	favoriteList: [],
	searchMovie: [],
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_MOVIES":
			return {
				...state,
				movieList: [...state.movieList, ...action.payload],
			};
		case "SELECT_MOVIE":
			return {
				...state,
				movieList: [],
				selectedMovie: action.payload,
			};
		case "SEARCH_MOVIES":
			return {
				...state,
				searchMovie: [...state.searchMovie, ...action.payload],
			};
	}

	return state;
};

export default moviesReducer;
