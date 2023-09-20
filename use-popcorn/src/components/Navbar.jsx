import { useRef, useEffect } from "react";

export function Search({ query, setQuery }) {
	const searchEl = useRef(null);

	useEffect(() => {
		searchEl.current.focus();
	}, []);

	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			ref={searchEl}
		/>
	);
}

export function Logo() {
	return (
		<div className="logo">
			<span role="img">🍿</span>
			<h1>usePopcorn</h1>
		</div>
	);
}

export function Results({ movies }) {
	return (
		<p className="num-results">
			Found <strong>{movies.length}</strong> results
		</p>
	);
}

export function Navbar({ children }) {
	return <nav className="nav-bar">{children}</nav>;
}
