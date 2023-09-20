import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import { FriendsList } from "./FriendsList";

export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);

	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList />
				{showAddFriend && <FormAddFriend />}
				<Button onClick={() => setShowAddFriend((show) => !show)}>
					Add Friend
				</Button>
			</div>
			<FormSplitBill />
		</div>
	);
}
