import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = () => {
	return (
		<Box mt={2} sx={{ display: "flex", alignItems: "flex-end" }}>
			<SearchIcon fontSize="large" />
			<TextField
				id="standard-basic"
				label="Search"
				variant="standard"
				fullWidth
			/>
		</Box>
	);
};

export default SearchForm;
