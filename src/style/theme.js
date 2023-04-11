import { createTheme } from "@mui/material";

export const useAppTheme = () => {
	const palette = {
		primary: {
			200: "#BEB7FB",
			300: "#9C92F8",
			400: "#7B6EF6",
			500: "#5A4AF4",
			600: "#483BC3",
			700: "#362C92",
			800: "#251E62",
		},
	};

	return createTheme({
		palette: palette,
	});
};
