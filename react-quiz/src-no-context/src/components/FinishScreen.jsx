const FinishScreen = ({ score, maxScore }) => {
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
