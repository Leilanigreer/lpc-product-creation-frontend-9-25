import { useState } from "react";
import { LeatherColorNew } from "./LeatherColorNew";

export function LeatherColorIndex ({leathercolors}) {
  const [selectedColor, setSelectedColor] = useState('');
  const [showNewColorForm, setShowNewColorForm] = useState(false);

  const handleColorChange = (event) => {
    const selected = event.target.value;
    setSelectedColor(selected)
    // console.log(selected);

    if (selected == 'add_new') {
      setShowNewColorForm(true);
    } else{
      setShowNewColorForm(false);
    }
    };

    const handleNewColorSubmit = (newColor) => {
      console.log(`New color to be added: ${newColor}`);
      setShowNewColorForm(false);
      setSelectedColor('');
    };

  return (
    <div>
          <form>
            <label htmlFor="colors">Choose a color:</label>
            <select 
              name="colors" 
              id="colors"
              value={selectedColor}
              onChange={handleColorChange}>
              <option value="">Select a color</option>
              {leathercolors.map((color) => (
                <option key={color.id} value={color.name}>
                  {color.name}
                </option>
              ))}
              <option value="add_new">Add New</option>
            </select>
            <div>
            <input type="submit" value="submit"></input>
            </div>
          </form>
          {showNewColorForm && <LeatherColorNew onSubmit={handleNewColorSubmit}/>}
    </div>
  );
}


