import { useState } from "react";
import "./App.css";

function App() {

  // var counter = 7;
  let [counter,setcounter] = useState(7)

  const Addvalue = () => {
    setcounter(counter+1),
    console.log("clicked",counter)
  }

  const Removevalue = () => {
    setcounter(counter-1)
    console.log("clicked",counter)
  }

  return (
    <div>
      <h1>Siurya Pratap Singh</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={Addvalue}>Add value</button>
      <br />
      <button onClick={Removevalue}>Remove value</button>
    </div>
  );
}

export default App;
