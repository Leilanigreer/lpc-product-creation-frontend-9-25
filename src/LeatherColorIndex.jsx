export function LeatherColorIndex ({leathercolors}) {
  return (
    <div>
      <h2>This is a test</h2>
          <form>
            <label htmlFor="colors">Choose a color:</label>
            <select name="colors" id="colors">
              {leathercolors.map((color) => (
                <option key={color.id} value={color.name}>
                  {color.name}
                </option>
              ))}
            </select>
            <div>
            <input type="submit" value="submit"></input>
            </div>
          </form>
    </div>
  );
}


