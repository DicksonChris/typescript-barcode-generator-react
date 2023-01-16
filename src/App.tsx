import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Layout from './Layout'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout/>
  )
}

export default App
