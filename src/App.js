import { Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { useAppTheme } from "./style/theme";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Moovie";
import NotFound from "./pages/NotFound";
import Header from "./components/header/Header";

function App() {
	const theme = useAppTheme();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/:id" element={<Movie />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				{/* <Movie /> */}
			</Container>
		</ThemeProvider>
	);
}

export default App;
