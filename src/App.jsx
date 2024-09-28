import { useState } from 'react'
import logoSmart from '/logoSmart.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
          <img src={logoSmart} className="logo" alt="Vite logo" />
      </div>
     
    </>
  )
}

export default App
