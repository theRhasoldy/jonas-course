export function Footer() {
	const hour = new Date().getHours();
	const openHour = 22;
	const closedHour = 23;

	return (
		<footer className="footer">
			{hour >= openHour && hour <= closedHour ? (
				"We're currently open"
			) : (
				<Order openHour={openHour} closeHour={closedHour} test="nottest" />
			)}
		</footer>
	);
}

function Order({ openHour, closeHour, test = "test" }) {
	return (
		<p>
			Sorry we&apos;re closed, come visit us from {openHour}:00 till {closeHour}
			:00, {test}
		</p>
	);
}
