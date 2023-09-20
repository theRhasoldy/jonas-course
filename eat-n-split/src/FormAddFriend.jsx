import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend() {
 const [name, setName] = useState("");
 const [image, setImage] = useState("");

 function handleSubmit(e) {
  e.preventDefault();

  const newFriend = {
   name: name,
   imageUrl: image,
   balance: 0,
   id: crypto.randomUUID(),
  };
  console.log(newFriend);
 }

 return (
  <form className="form-add-friend" onSubmit={handleSubmit}>
   <label>🤼 Friend Name</label>
   <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

   <label>🙃 Image URL</label>
   <input
    type="text"
    value={image}
    onChange={(e) => setImage(e.target.value)}
   />
   <Button>Add</Button>
  </form>
 );
}
