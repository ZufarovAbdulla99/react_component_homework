// import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1/Card1'
import Card2 from './components/Card2/Card2'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='cards'>
      <Card1 />
      <Card2 />
    </div>
  )
}

export default App
