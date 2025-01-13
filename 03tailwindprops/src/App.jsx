import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ravi Shankar",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Kolo Muani" btnText="click me" />
      <Card username="Kylian Mbappé" btnText='Click Button' />
      <Card username="Junior"  />
      {/* <Card userName= "ddgs" someObje={newArr}/> */}
      {/* <Card userName= "ddgs" someObje={myObj}/> */}
    </>
  )
}

export default App
