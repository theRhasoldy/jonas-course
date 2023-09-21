const Progress = ({ index, numQuestions, score, maxScore }) => {
	return (
		<header className="progress">
			<progress max={numQuestions} value={index}></progress>
			<p>
				Question <strong>{index + 1}</strong>/{numQuestions}
			</p>
			<p>
				Score <strong>{score}</strong>/{maxScore}
			</p>
		</header>
	);
};

export default Progress;
