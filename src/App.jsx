import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Notification from './components/notification.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Notification />
    </>
  )
}

export default App
