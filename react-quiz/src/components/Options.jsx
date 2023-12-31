import { useQuiz } from "../contexts/QuizContext";

const Options = ({ question }) => {
	const { dispatch, answer } = useQuiz();
	const hasAnswer = answer !== null;

	return (
		<div className="options">
			{question.options.map((option, i) => (
				<button
					onClick={() => dispatch({ type: "newAnswer", payload: i })}
					className={`btn btn-option ${i === answer ? "answer" : ""} ${
						hasAnswer ? (i === question.correctOption ? "correct" : "wrong") : ""
					}`}
					disabled={hasAnswer}
					key={option}
				>
					{option}
				</button>
			))}
		</div>
	);
};

export default Options;
