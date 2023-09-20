/* import "./App.css";

import Form from "./components/Form";
import Logo from "./components/Logo";
import { PackingList } from "./components/PackingList";
import Stats from "./components/Stats";

import { useState } from "react";

function App() {
	const [items, setItems] = useState([]);

	function addNewItem(item) {
		setItems((curItems) => [...curItems, item]);
	}

	function deleteItem(id) {
		setItems((curItems) => curItems.filter((curItem) => curItem.id !== id));
	}

	function checkPacked(id) {
		setItems((curItems) =>
			curItems.map((curItem) =>
				curItem.id === id ? { ...curItem, packed: !curItem.packed } : curItem
			)
		);
	}

	function clearList() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all items?"
		);
		confirmed && setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={addNewItem} />
			<PackingList
				items={items}
				onDeleteItem={deleteItem}
				onCheckItem={checkPacked}
				onClearList={clearList}
			/>
			<Stats items={items} />
		</div>
	);
} */

// export default App;

/* import { useState } from "react";
import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<FlashCards />
		</div>
	);
}

const questions = [
	{
		id: 3457,
		question: "What language is React based on?",
		answer: "JavaScript",
	},
	{
		id: 7336,
		question: "What are the building blocks of React apps?",
		answer: "Components",
	},
	{
		id: 8832,
		question: "What's the name of the syntax we use to describe a UI in React?",
		answer: "JSX",
	},
	{
		id: 1297,
		question: "How to pass data from parent to child components?",
		answer: "Props",
	},
	{
		id: 9103,
		question: "How to give components memory?",
		answer: "useState hook",
	},
	{
		id: 2002,
		question:
			"What do we call an input element that is completely synchronised with state?",
		answer: "Controlled element",
	},
];

function FlashCards() {
	const [selected, setSelected] = useState(1297);

	return (
		<div className="flashcards">
			{questions.map((question) =>
				selected !== question.id ? (
					<div onClick={() => setSelected(question.id)} key={question.id}>
						<p>{question.question}</p>
					</div>
				) : (
					<div
						onClick={() => setSelected(null)}
						className="selected"
						key={question.id}
					>
						<p>{question.answer}</p>
					</div>
				)
			)}
		</div>
	);
} */

import { useState } from "react";

import { Accordion } from "./components/Accordion";

export default function App() {
	return (
		<div className="App">
			<Accordion />
		</div>
	);
}
