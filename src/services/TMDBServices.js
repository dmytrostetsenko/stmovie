import axios from "axios";

const TMDBServices = () => {
	const _baseUrl = "https://api.themoviedb.org/3";
	const _key = `?api_key=${process.env.REACT_APP_API_KEY}`;
	const fetchMovie = async (page) => {
		try {
			const {
				data: { results },
			} = await axios.get(
				`${_baseUrl}/discover/movie${_key}&page=${page}`
			);
			return results;
		} catch (error) {
			throw new Error(error);
		}
	};

	return { fetchMovie };
};

export default TMDBServices;
