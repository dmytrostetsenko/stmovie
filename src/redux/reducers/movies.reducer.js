const initialState = {
	movieList: [],
	selectedMovie: null,
	favoriteList: [],
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
				selectedMovie: action.payload,
			};
	}

	return state;
};

export default moviesReducer;
