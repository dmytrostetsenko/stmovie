import axios from "axios";

const TMDBServices = () => {
	const _baseUrl = "https://api.themoviedb.org/3";
	const _key = `?api_key=${process.env.REACT_APP_API_KEY}`;
	const fetchMovieList = async (page) => {
		try {
			const {
				data: { results },
			} = await axios.get(
				`${_baseUrl}/discover/movie${_key}&page=${page}`
			);
			return results.slice(0, 10);
		} catch (error) {
			throw new Error(error);
		}
	};
	const fetchMovie = async (id) => {
		try {
			const { data } = await axios.get(`${_baseUrl}/movie/${id}${_key}`);
			return data;
		} catch (error) {
			throw new Error(error);
		}
	};
	const searchByName = async (name) => {
		try {
			const {
				data: { results },
			} = await axios.get(
				`${_baseUrl}/search/movie${_key}&query=${name}`
			);
			return results.slice(0, 10);
		} catch (error) {
			throw new Error(error);
		}
	};

	return { fetchMovieList, searchByName, fetchMovie };
};

export default TMDBServices;
