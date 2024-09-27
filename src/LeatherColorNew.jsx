import { useState } from "react";

export function LeatherColorNew ({onSubmit}) {
  const [newColor, setNewColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newColor);
    setNewColor('');
    // console.log(newColor)
  };

  return (
    <div>
      {/* <h1>Hello</h1> */}
      <form onSubmit={handleSubmit}>
      <div>
      What is the new color: <input 
        name="name" 
        type="text" 
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
        />
        </div>
      <input type="submit" value="Create New Color"/>
      </form>
    </div>
  )
}
