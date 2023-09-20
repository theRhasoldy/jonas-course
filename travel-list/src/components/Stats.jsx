export default function Stats({ items }) {
	if (!items.length)
		return (
			<footer className="stats">
				<em>Start adding things you lucky bastard</em>
			</footer>
		);

	const numItems = items.length;
	const packedItems = items.filter((item) => item.packed === true).length;
	const percentage = (packedItems / numItems) * 100 || 0;

	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? "You are ready to go"
					: `You have ${numItems} items on your list, and you already packed ${packedItems}
				(${Math.round(percentage)}%) items`}
			</em>
		</footer>
	);
}
