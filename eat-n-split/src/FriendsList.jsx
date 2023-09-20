import Button from "./Button";

const initialFriends = [
 {
  id: 118836,
  name: "Clark",
  image: "https://i.pravatar.cc/48?u=118836",
  balance: -7,
 },
 {
  id: 933372,
  name: "Sarah",
  image: "https://i.pravatar.cc/48?u=933372",
  balance: 20,
 },
 {
  id: 499476,
  name: "Anthony",
  image: "https://i.pravatar.cc/48?u=499476",
  balance: 0,
 },
];

export function FriendsList() {
 return (
  <ul>
   {initialFriends.map((friend) => (
    <FriendCard key={friend.id} friend={friend} />
   ))}
  </ul>
 );
}

export function FriendCard({ friend }) {
 return (
  <li>
   <img src={friend.image} alt={friend.name} />
   <h3>{friend.name}</h3>
   {friend.balance > 0 ? (
    <p className="green">
     {friend.name} owes you {Math.abs(friend.balance)}
    </p>
   ) : friend.balance < 0 ? (
    <p className="red">
     you owe {friend.name} {Math.abs(friend.balance)}
    </p>
   ) : (
    <p>you and {friend.name} are even</p>
   )}
   <Button>Select</Button>
  </li>
 );
}
