import { useState } from "react";
import "./App.css";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

function App() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	const handleNext = function () {
		step < 3 && setStep((curStep) => curStep + 1);
	};

	const handlePrevious = function () {
		step > 1 && setStep((curStep) => curStep - 1);
	};

	/* const closeSteps = function () {
		setIsOpen(!isOpen);
	}; */

	if (isOpen) {
		return (
			<div className="steps">
				<button
					className="close"
					onClick={() => setIsOpen((curIsOpen) => !curIsOpen)}
				>
					X
				</button>
				<div className="numbers">
					<div className={step >= 1 ? "active" : ""}>1</div>
					<div className={step >= 2 ? "active" : ""}>2</div>
					<div className={step >= 3 ? "active" : ""}>3</div>
				</div>

				<p className="message">{messages[step - 1]}</p>

				<div className="buttons">
					<Button handleClick={handlePrevious}>
						<span>👈</span>
						previous
					</Button>
					<Button handleClick={handleNext}>
						next
						<span>👈</span>
					</Button>
				</div>
			</div>
		);
	}
}

function Button({ handleClick, children }) {
	return (
		<button style={{ backgroundColor: "peachpuff" }} onClick={handleClick}>
			{children}
		</button>
	);
}

export default App;
