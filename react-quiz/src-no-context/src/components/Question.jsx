import { useQuiz } from "../../../src/contexts/QuizContext";
import Options from "./Options";
import Timer from "./Timer";

const Question = () => {
	const { dispatch, question, answer, index, numQuestions, secondsRemaining } =
		useQuiz();
	return (
		<>
			<h4>{question?.question}</h4>
			<Options dispatch={dispatch} question={question} answer={answer} />
			{answer !== null ? (
				index < numQuestions - 1 ? (
					<button
						className="btn btn-ui"
						onClick={() => {
							dispatch({ type: "incQuestion" });
						}}
					>
						Next Question
					</button>
				) : (
					<button
						className="btn btn-ui"
						onClick={() => {
							dispatch({ type: "finishQuiz" });
						}}
					>
						Finish Quiz
					</button>
				)
			) : null}

			<button
				className="btn btn-ui"
				onClick={() => {
					dispatch({ type: "resetQuiz" });
				}}
			>
				Reset Quiz
			</button>
			<footer>
				<Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
			</footer>
		</>
	);
};

export default Question;
