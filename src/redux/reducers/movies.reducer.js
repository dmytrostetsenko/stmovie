const initialState = {
	movieList: [],
	singleMovie: null,
	favoriteList: [],
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_MOOVIES":
			return {
				...state,
				movieList: action.payload,
			};
	}

	return state;
};

export default moviesReducer;
