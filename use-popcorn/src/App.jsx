import { useState, useEffect } from "react";

import { Navbar, Results, Logo, Search } from "./components/Navbar";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/ListBox";
import { WatchedList, Summary } from "./components/WatchedBox";
import MovieDetails from "./components/SelectedMovie";

import useMovies from "./useMovies";
import useLocalStorageState from "./useLocalStorageState";

const tempMovieData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		imdbID: "tt1375662",
		Title: "Not Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		imdbID: "tt0133093",
		Title: "The Matrix",
		Year: "1999",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		imdbID: "tt6751668",
		Title: "Parasite",
		Year: "2019",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
];

const tempWatchedData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: "tt0088763",
		Title: "Back to the Future",
		Year: "1985",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];

const Loader = function () {
	return <p className="loader">Loading...</p>;
};

const ErrorMessage = function ({ message }) {
	return <p className="error">{message}</p>;
};

export default function App() {
	// const [watched, setWatched] = useState(JSON.parse(localStorage.getItem("watched")));
	const [watched, setWatched] = useLocalStorageState([], "watched");
	const [query, setQuery] = useState("");
	const [selectedMovie, setSelectedMovie] = useState("");

	const handleSelectedId = (movieId) => {
		setSelectedMovie((id) => (movieId === id ? null : movieId));
	};

	const handleCloseMovie = () => {
		setSelectedMovie(null);
	};

	const handleAddMovie = (movie) => {
		setWatched((watched) => [...watched, movie]);
	};

	const handleDeleteWatched = (id) => {
		setWatched((watched) => watched.filter((movie) => movie.imdbRating !== id));
	};

	const { movies, error, isLoading } = useMovies(query, handleCloseMovie);

	return (
		<>
			<Navbar>
				<Logo />
				<Search query={query} setQuery={setQuery} />
				<Results movies={movies} />
			</Navbar>

			<Main>
				<Box>
					{isLoading && <Loader />}
					{error && <ErrorMessage message={error} />}
					{!isLoading && !error && (
						<MovieList onSelectedMovie={handleSelectedId} movies={movies} />
					)}
				</Box>

				<Box>
					{selectedMovie ? (
						<MovieDetails
							watchedList={watched}
							movieId={selectedMovie}
							onCloseMovie={handleCloseMovie}
							onAddWatched={handleAddMovie}
						/>
					) : (
						<>
							<Summary watched={watched} />
							<WatchedList watched={watched} onDeleteWatched={handleDeleteWatched} />
						</>
					)}
				</Box>
			</Main>
		</>
	);
}
