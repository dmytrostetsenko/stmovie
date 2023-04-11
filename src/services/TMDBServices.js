import axios from "axios";

const TMDBServices = () => {
	const _baseUrl = "https://api.themoviedb.org/3";
	const fetchMovie = async () => {
		const {
			data: { results },
		} = await axios.get(`${_baseUrl}/discover/movie`, {
			params: {
				api_key: process.env.REACT_APP_API_KEY,
			},
		});
		console.log(results);
	};

	return { fetchMovie };
};

export default TMDBServices;
