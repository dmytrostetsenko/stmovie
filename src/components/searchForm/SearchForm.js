import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchMovieThunk } from "../../redux/actions/movie.action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
	movieName: yup.string().required("This field is required"),
});

const SearchForm = () => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			movieName: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			dispatch(searchMovieThunk(values.movieName));
		},
	});

	return (
		<>
			<Box
				component="form"
				onSubmit={formik.handleSubmit}
				mt={2}
				sx={{ display: "flex", alignItems: "flex-end" }}
			>
				<TextField
					id="standard-basic"
					label="Search"
					variant="standard"
					fullWidth
					name="movieName"
					onChange={formik.handleChange}
				/>
				<Button type="submit">
					<SearchIcon fontSize="large" />
				</Button>
			</Box>
		</>
	);
};

export default SearchForm;
