import React from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App({ url }) {

  return (
    <>
      <ProgressBar 
        url = {"https://dummyjson.com/products?limit=100"}
      />
    </>
  )
}

export default App
