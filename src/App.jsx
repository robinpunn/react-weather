import { useState } from 'react'
import './App.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons/TopButtons'
import Inputs from './components/Inputs/Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TopButtons />
      <Inputs />
    </div>
  )
}

export default App
