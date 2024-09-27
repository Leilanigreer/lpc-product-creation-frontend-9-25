import axios from "axios";
import { useState, useEffect } from "react";
import { LeatherColorIndex } from "./LeatherColorIndex";

export function HeadcoversPage() {

  // const testLeather = [
  //   {id: 1, name: "red"}, {id: 2, name: "blue"}
  // ]  
  const [leatherColor, setLeatherColor] = useState([]);
 
  const handleLeatherColorIndex = () => {
    console.log("handleLeatherColorIndex");
    axios.get("http://localhost:3000/leathercolors.json").then((response) => {
      console.log(response.data);
      setLeatherColor(response.data);
    });
  };

  useEffect(handleLeatherColorIndex, []);

  return (
    <main>
      <h1>Welcome to the start of our app!</h1>
      <LeatherColorIndex leathercolors={leatherColor}/>
    </main>
  )
}