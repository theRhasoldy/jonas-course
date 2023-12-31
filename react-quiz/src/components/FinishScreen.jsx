import { useQuiz } from "../contexts/QuizContext";

const FinishScreen = () => {
	const { maxScore, score } = useQuiz();
	return (
		<>
			<p className="result">
				You Scored <strong>{score}</strong> out of {maxScore}
			</p>
			<p>
				That is <strong>{((score / maxScore) * 100).toFixed(0)}%</strong>
			</p>
		</>
	);
};

export default FinishScreen;
