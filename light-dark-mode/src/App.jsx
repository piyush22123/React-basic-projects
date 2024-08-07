import React from 'react'
import './App.css'
import useLocalStorage from './components/useLocalStorage'

function App() {

  const [theme, setTheme] = useLocalStorage("theme", "dark")

  const handleToggleTheme = () => {
    setTheme(theme === "dark"? "light" : "dark")
  }

  console.log(theme)

  return (
    <>
      <div className="main" data-theme={ theme }>
        <h1>Light to Dark Mode</h1>
        <button onClick={ handleToggleTheme }>Change Mode</button>
      </div>
    </>
  )
}

export default App
