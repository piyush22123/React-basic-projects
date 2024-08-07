import { useRef, useState } from 'react'
import './App.css'

function App() {


  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const helpRef = useRef(null)

  const handleScroll = (ref) => {
    console.log(ref)
    if(ref === "homeRef"){
      homeRef.current.scrollIntoView({
        behavior:'smooth'
      })
    }
    else if(ref === "aboutRef"){
      aboutRef.current.scrollIntoView({
        behavior:'smooth'
      })
    }
    else if(ref === "helpRef"){
      helpRef.current.scrollIntoView({
        behavior:'smooth'
      })
    }
    else{
      contactRef.current.scrollIntoView({
        behavior:'smooth'
      })
    }
  }


  return (
    <>
      <div className="main">
        <div className="nav">
          <button onClick={() => handleScroll("homeRef")}>Home</button>
          <button onClick={() => handleScroll("aboutRef")}>About</button>
          <button onClick={() => handleScroll("contactRef")}>Contact</button>
          <button onClick={() => handleScroll("helpRef")}>Help</button>
        </div>
        
        <div className="container">
        <div ref={homeRef} className='page'>
          <h1>Home page</h1>
          <p>This is a home page</p>
        </div>
        <div ref={aboutRef} className='page'>
          <h1>About Page</h1>
          <p>This is a About page</p>
        </div>
        <div ref={contactRef} className='page'>
        <h1>Contact Page</h1>
        <p>This is a Contact page</p>
        </div>
        <div ref={helpRef} className='page'>
        <h1>Help Page</h1>
        <p>This is a help page</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
