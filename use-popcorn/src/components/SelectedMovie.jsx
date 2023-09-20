import { useState } from "react";
import { useEffect, useRef } from "react";
import StarRating from "./StarRating";

export default function MovieDetails({
	movieId,
	onCloseMovie,
	onAddWatched,
	watchedList,
}) {
	const [movie, setMovie] = useState({});
	const [userRating, setUserRating] = useState("");

	const countRef = useRef(0);

	useEffect(() => {
		if (userRating) countRef.current++;
	}, [userRating]);

	const isWatched = watchedList.map((movie) => movie.imdbID).includes(movieId);

	const movieAlreadyRated = watchedList.find(
		(movie) => movie.imdbID === movieId
	)?.userRating;

	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie;

	const handleAddMovie = () => {
		const newWatchedMovie = {
			imdbID: movieId,
			title,
			year,
			poster,
			imdbRating: Number(imdbRating),
			runtime: Number(runtime.split(" ").at(0)),
			userRating,
			countRatingDecisions: countRef.current,
		};

		onAddWatched(newWatchedMovie);
		onCloseMovie();
	};

	useEffect(() => {
		const fetchMovieDetails = async () => {
			const response = await fetch(
				`http://www.omdbapi.com/?apikey=f09b3542&i=${movieId}`
			);
			const data = await response.json();
			setMovie(data);
		};

		fetchMovieDetails();
	}, [movieId]);

	useEffect(() => {
		if (!title) return;
		document.title = title;
		return () => {
			document.title = "Use Popcorn";
			console.log("Clean up function for movie");
		};
	}, [title]);

	useEffect(() => {
		const closeMovie = (e) => {
			if (e.key === "q") {
				onCloseMovie();
				console.log("Close");
			}
		};
		document.addEventListener("keypress", closeMovie);

		return () => {
			document.removeEventListener("keypress", closeMovie);
		};
	}, [onCloseMovie]);

	return (
		<div className="details">
			<header>
				<button className="btn-back" onClick={onCloseMovie}>
					&larr;
				</button>
				<img src={poster} alt={`Poster of ${title}`} />
				<div className="details-overview">
					<h2>{title}</h2>
					<p>
						{released} &bull; {runtime}
					</p>
					<p>{genre}</p>
					<p>
						<span>⭐</span>
						{imdbRating} IMDB Rating
					</p>
				</div>
			</header>

			<section>
				{!isWatched ? (
					<div className="rating">
						<StarRating ratingLength={10} onSetRating={setUserRating} />
						{userRating && (
							<button className="btn-add" onClick={handleAddMovie}>
								Add to list
							</button>
						)}
					</div>
				) : (
					<p>You Already Rated This Movie {movieAlreadyRated}</p>
				)}
				<p>
					<em>{plot}</em>
				</p>
				<p>Starring: {actors}</p>
				<p>Directed by: {director}</p>
			</section>
		</div>
	);
}
