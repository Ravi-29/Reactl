import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-purple-500 p-3 rounded-md'>vite with tailwind</h1>
      <Card></Card>
    </>
  )
}

export default App
