import axios from "axios";

const TMDBServices = () => {
	const _baseUrl = "https://api.themoviedb.org/3";
	const _key = process.env.REACT_APP_API_KEY;
	const fetchMovie = async (url) => {
		try {
			const {
				data: { results },
			} = await axios.get(`${_baseUrl}${url}`, {
				params: {
					api_key: _key,
				},
			});
			return results;
		} catch (error) {
			throw new Error(error);
		}
	};

	return { fetchMovie };
};

export default TMDBServices;
