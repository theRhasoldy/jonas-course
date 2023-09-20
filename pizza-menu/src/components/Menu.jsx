import { pizzaData } from "../data.js";
import Pizza from "./Pizza";

export default function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{/* Check for pizzas */}
			{pizzaData.length > 0 && (
				<ul className="pizzas">
					{pizzaData.map((pizza) => {
						return <Pizza pizzaObj={pizza} key={pizza.name} />;
					})}
				</ul>
			)}
		</main>
	);
}
