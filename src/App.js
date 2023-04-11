import { useEffect } from "react";
import TMDBServices from "./services/TMDBServices";

function App() {
	const { fetchMovie } = TMDBServices();

	useEffect(() => {
		fetchMovie();
	}, []);

	return <div className="App"></div>;
}

export default App;
