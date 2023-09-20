import { useEffect, useState } from "react";

export default function useMovies(query) {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	// setMovies(getMovies());
	useEffect(() => {
		// callback?.();

		const controller = new AbortController();
		const getMovies = async () => {
			try {
				setIsLoading(true);
				setError("");
				const moviedb = await fetch(
					`http://www.omdbapi.com/?apikey=f09b3542&s=${query}`,
					{ signal: controller.signal }
				);
				if (!moviedb.ok) throw new Error("A problem occured baybay");

				const response = await moviedb.json();
				if (response.Response === "False") throw new Error("No results found!");

				setMovies(response.Search);
				setError("");
			} catch (error) {
				if (error.name !== "AbortError") {
					setError(error.message);
				}
			} finally {
				setIsLoading(false);
			}
		};

		if (query.length < 3) {
			setMovies([]);
			setError("");
			return;
		}

		// handleCloseMovie();
		getMovies();
		return () => {
			controller.abort();
		};
	}, [query]);

	return { movies, error, isLoading };
}
