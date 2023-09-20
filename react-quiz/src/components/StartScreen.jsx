const StartScreen = ({ numQuestions, dispatch }) => {
	return (
		<div>
			<h2>Welcome to the React Quiz</h2>
			<h3>{numQuestions} questions to test your react mastery</h3>
			<button
				onClick={() => dispatch({ type: "setActive" })}
				className="btn btn-ui"
			>
				Let&apos;s Start
			</button>
		</div>
	);
};

export default StartScreen;
