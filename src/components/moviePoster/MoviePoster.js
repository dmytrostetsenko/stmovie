import { Card, CardMedia, Fab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MoviePoster = ({ image }) => {
	return (
		<Card sx={{ position: "relative" }}>
			<Fab
				color="primary"
				aria-label="add"
				sx={{ position: "absolute", top: "10px", left: "10px" }}
			>
				<FavoriteBorderIcon />
			</Fab>
			<CardMedia image={image} component="img" />
		</Card>
	);
};

export default MoviePoster;
