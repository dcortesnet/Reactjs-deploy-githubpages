import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import githubLogo from './assets/github.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://pages.github.com" target="_blank">
          <img src={githubLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Static Page</h1>
    </>
  )
}

export default App
