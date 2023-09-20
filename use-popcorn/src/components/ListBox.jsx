import { useState } from "react";

function MovieItem({ onSelectedMovie, movie }) {
	return (
		<li onClick={() => onSelectedMovie(movie.imdbID)}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
}

export default function MovieList({ onSelectedMovie, movies }) {
	return (
		<ul className="list list-movies">
			{movies?.map((movie) => (
				<MovieItem
					onSelectedMovie={onSelectedMovie}
					key={movie.imdbID}
					movie={movie}
				/>
			))}
		</ul>
	);
}
