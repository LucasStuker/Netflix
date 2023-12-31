import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
