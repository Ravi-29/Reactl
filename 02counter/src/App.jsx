import { useState } from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(10)

  //let counter = 15

  const addValue = () =>{
    // console.log("Value Added", counter);
    // setCounter(counter + 1)

    if (counter < 20) {
      console.log("Value Added", counter);
      setCounter(counter + 1);
  } else {
      console.log("Cannot exceed 20");
  }

  }
    
    const removeValue = () =>{
      // console.log("Value Removed", counter);
      // setCounter(counter - 1)

      if (counter > 0) {
        console.log("Value Removed", counter);
      setCounter(counter - 1)
    } else {
        console.log("Cannot exceed 0");
    }
  }
  
  return (
    <>
    <h1>React !!!</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
