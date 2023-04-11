const MovieCard = ({ movie }) => {
	const { overview, title, poster_path } = movie;
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

	return (
		<li>
			<h3>{title}</h3>
			{poster_path ? (
				<img
					src={`${IMAGE_PATH}${poster_path}`}
					alt={`poster for ${title}`}
				/>
			) : null}
			<p>{overview}</p>
		</li>
	);
};

export default MovieCard;
