import { useState } from 'react'
import { images } from './images'
import './App.css'

function App() {
  const [imgIndex, setImgIndex] = useState(0);

  const slideImageRight = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % images.length); // when reach to end index start to 0
  }

  const slideImageLeft = () => {
    setImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // to avoid outof bound
  }


  return (
    <>
      <div className="main">
        <div onClick={slideImageLeft} className="left">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        
        <img src={images[imgIndex].src} alt="" />
        
        <div onClick={slideImageRight} className="right">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </>
  )
}

export default App
