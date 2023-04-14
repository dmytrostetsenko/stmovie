import { useDispatch } from "react-redux";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Rating,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	const { vote_average, title, poster_path, id } = movie;
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

	return (
		<Link to={`/${id}`}>
			<CardActionArea>
				<Card
					sx={{
						height: "500px",
						display: "flex",
						flexDirection: "column",
						paddingTop: "10px",
					}}
				>
					<CardMedia
						component="img"
						image={`${IMAGE_PATH}${poster_path}`}
						alt={`poster for ${title}`}
						sx={{ height: "75%", objectFit: "contain" }}
					/>
					<CardContent
						sx={{
							height: "35%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<Typography
							variant="h6"
							sx={{ fontSize: "15px", fontWeight: "700" }}
						>
							{title}
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Rating
								name="read-only"
								defaultValue={vote_average / 2}
								precision={0.25}
								readOnly
							/>
							<Typography variant="span" sx={{ ml: 2 }}>
								TMBD: {vote_average / 2}
							</Typography>
						</Box>
					</CardContent>
				</Card>
			</CardActionArea>
		</Link>
	);
};

export default MovieCard;
