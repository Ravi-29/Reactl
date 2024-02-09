import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(10)

  //let counter = 15

  const addValue = () =>{
    // console.log("Value Added", counter);
    // setCounter(counter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)

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

      if (counter > -5) {
        console.log("Value Removed", counter);
      setCounter(counter - 1)
    } else {
        console.log("Cannot exceed -5");
    }
  }
  
  return (
    <>
    <h1>React !!!</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button> {" "}
    
    <button onClick={removeValue}>Remove value</button>
    <p>footer :{counter}</p>
    </>
  )
}

export default App
