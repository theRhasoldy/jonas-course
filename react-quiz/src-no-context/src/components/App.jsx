import "../App.css";
import { useEffect } from "react";
import { useReducer } from "react";
import Header from "./Header";
import Main from "./MainComp";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const initialState = {
	questions: [],

	// loading, error, ready, active, finish
	status: "loading",
	index: 0,
	answer: null,
	score: 0,
	secondsRemaining: 10,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "dataRecieved":
			return { ...state, questions: action.payload, status: "ready" };

		case "dataFailed":
			return { ...state, status: "error" };

		case "setActive":
			return { ...state, status: "active" };

		case "incQuestion":
			return { ...state, answer: null, index: state.index + 1 };

		case "resetQuiz":
			return { ...state, status: "ready", index: 0, score: 0, answer: null };

		case "newAnswer":
			const question = state.questions.at(state.index);
			return {
				...state,
				score:
					action.payload === question.correctOption
						? state.score + question.points
						: state.score,
				answer: action.payload,
			};

		case "finishQuiz":
			return { ...state, status: "finish" };

		case "tick":
			return {
				...state,
				secondsRemaining: state.secondsRemaining - 1,
				status: state.secondsRemaining < 0 ? "finish" : state.status,
			};

		default:
			throw new Error("Action Unknown");
	}
};

function App() {
	const [
		{ questions, status, index, answer, score, secondsRemaining },
		dispatch,
	] = useReducer(reducer, initialState);

	const numQuestions = questions.length;

	const maxScore = questions.reduce(
		(previous, current) => previous + current.points,
		0
	);

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const res = await fetch("http://localhost:8000/questions");
				const data = await res.json();

				data && dispatch({ type: "dataRecieved", payload: data });
			} catch (error) {
				dispatch({ type: "dataFailed" });
			}
		};

		fetchQuestions();
	}, []);

	useEffect(() => {
		if (index > numQuestions - 1) dispatch({ type: "finishQuiz" });
	}, [index, numQuestions]);

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<StartScreen numQuestions={numQuestions} dispatch={dispatch} />
				)}
				{status === "finish" && <FinishScreen score={score} maxScore={maxScore} />}
				{status === "active" && (
					<>
						<Progress
							numQuestions={numQuestions}
							index={index}
							score={score}
							maxScore={maxScore}
						/>
						<Question
							index={index}
							numQuestions={numQuestions}
							dispatch={dispatch}
							question={questions[index]}
							answer={answer}
							secondsRemaining={secondsRemaining}
						/>
					</>
				)}
			</Main>
		</div>
	);
}

export default App;
