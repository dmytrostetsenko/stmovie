import { Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useAppTheme } from "./style/theme";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Header from "./components/header/Header";

function App() {
	const theme = useAppTheme();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</ThemeProvider>
	);
}

export default App;
