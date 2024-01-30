import { useState } from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () =>{
    console.log("Value Added", counter);
    //counter = counter+1
    setCounter(counter + 1)
  }
    
    const removeValue = () =>{
      console.log("Value Removed", counter);
      setCounter(counter - 1)
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
