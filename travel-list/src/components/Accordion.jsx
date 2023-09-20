import { useState } from "react";

const faqs = [
	{
		title: "Where are these chairs assembled?",
		text:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
	},
	{
		title: "How long do I have to return my chair?",
		text:
			"Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
	},
	{
		title: "Do you ship to countries outside the EU?",
		text:
			"Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
	},
];

export function Accordion() {
	const [curOpen, setCurOpen] = useState(null);

	return (
		<div className="accordion">
			<h1>Accordion</h1>
			{faqs.map((faq, i) => (
				<AccordionItem
					key={i}
					curOpen={curOpen}
					onOpen={setCurOpen}
					num={i}
					text={faq.text}
					title={faq.title}
				>
					😀
					<br />
					<br />
					{faq.text}
				</AccordionItem>
			))}
		</div>
	);
}

export function AccordionItem({ num, title, curOpen, onOpen, children }) {
	const isOpen = num === curOpen;

	return (
		<div
			className={isOpen ? "item open" : "item"}
			onClick={() => onOpen(isOpen ? null : num)}
		>
			<p className="number">{num + 1}</p>
			<p className="title">{title}</p>
			<p className="icon">{isOpen ? "-" : "+"}</p>
			{isOpen && <p className="content-box">{children}</p>}
		</div>
	);
}
