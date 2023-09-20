import { useState } from "react";

/* const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Charger", quantity: 1, packed: true },
];
*/

export function Item({ item, onDeleteItem, onCheckItem }) {
	return (
		<li key={item.id}>
			<input
				type="checkbox"
				value={item.packed}
				onChange={() => onCheckItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>x</button>
		</li>
	);
}

export function PackingList({ items, onDeleteItem, onCheckItem, onClearList }) {
	const [sort, setSort] = useState("input");
	let sortedItems;

	switch (sort) {
		case "input":
			sortedItems = items;
			break;

		case "description":
			sortedItems = items
				.slice()
				.sort((a, b) => a.description.localeCompare(b.description));
			break;

		case "packed":
			sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
			break;

		default:
			break;
	}

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onCheckItem={onCheckItem}
					/>
				))}
			</ul>

			<div className="actions">
				<select onChange={(e) => setSort(e.target.value)} value={sort}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button onClick={onClearList}>Clear List</button>
			</div>
		</div>
	);
}
