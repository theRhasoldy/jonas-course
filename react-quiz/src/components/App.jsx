import "../App.css";
import { useReducer } from "react";
import Header from "./Header";
import Main from "./MainComp";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import { useQuiz } from "../contexts/QuizContext";

function App() {
	const { index, questions, status, numQuestions, dispatch, score, maxScore } =
		useQuiz();

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
						<Progress />
						<Question question={questions[index]} />
					</>
				)}
			</Main>
		</div>
	);
}

export default App;
