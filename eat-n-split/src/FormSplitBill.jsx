export default function FormSplitBill({ friend }) {
	return (
		<form className="form-split-bill">
			<h2>Split Bill with {friend?.name}</h2>
			<label>Bill Value</label>
			<input type="text" />

			<label>Your expense</label>
			<input type="text" />

			<label>{friend?.name} expense</label>
			<input type="text" disabled />

			<label>Who is paying the bill?</label>
			<input type="text" />
		</form>
	);
}

function name(params) {
	console.log("hello");
	console.log("hello");
}
