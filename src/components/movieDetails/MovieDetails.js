import { Box, Typography, Button, Rating, Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import YouTubeIcon from "@mui/icons-material/YouTube";

const MovieDetails = ({ movie }) => {
	const {
		overview,
		title,
		original_language,
		budget,
		runtime,
		release_date,
		vote_average,
		genres,
	} = movie;

	const rating = +vote_average.toFixed(1);
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
			<Box>
				<Typography variant="h4" component="h3">
					{title}
				</Typography>
				<Typography variant="h5" component="p">
					{release_date.slice(0, 4)}
				</Typography>
			</Box>
			<Typography component="p">{overview}</Typography>
			<Typography component="p">Language: {original_language}</Typography>
			<Typography component="p">
				Budget: {budget / 1e6} million $
			</Typography>
			<Typography component="p">Runtime: {runtime} min</Typography>
			<Typography component="ul" sx={{ padding: "0", listStyle: "none" }}>
				Catigories:
				{genres?.map((genre) => (
					<Typography component="li" key={genre.id}>
						{genre.name}
					</Typography>
				))}
			</Typography>
			<Grid spacing={1.5} container>
				<Grid item>
					<Rating
						name="read-only"
						defaultValue={rating}
						precision={0.1}
						max={10}
						readOnly
					/>
				</Grid>
				<Grid item>
					<Typography component="span">
						Raiting TMDB: {rating}
					</Typography>
				</Grid>
			</Grid>
			<Box sx={{ display: "flex", gap: "15px" }}>
				<Button variant="contained" endIcon={<FavoriteBorderIcon />}>
					Add to favorite
				</Button>
				<Button variant="contained" endIcon={<YouTubeIcon />}>
					Watch trailer
				</Button>
			</Box>
		</Box>
	);
};

export default MovieDetails;
