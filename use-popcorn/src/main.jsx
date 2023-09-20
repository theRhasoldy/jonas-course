import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StarRating from "./components/StarRating.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<StarRating ratingLength={10} />
		<StarRating
			ratingLength={5}
			color="#b75566"
			size="4"
			messages={["Shit", "Awful", "Mid", "Great", "Masterpiece"]}
			defaultRating={5}
		/>
	</React.StrictMode>
);
