import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products?limit=100')
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (data) {
        setProduct(data.products.map((item) => item.title));
        setLoading(false);
      }
    }
    catch (error) {
      setLoading(false);
      console.error('Error:', error);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);



  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:'smooth'
    })
  }

  const bottomRef=  useRef(null);
  
  const handleScrollToDown = () => {
    bottomRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }
 

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className="main">
        <button onClick={handleScrollToDown}>Go Down</button>
        <div className="products">
        <ul>
          {
            product.map((item, index) => 
              <li key={index}>{item}</li>  // user is firstName
            )
          }
        </ul>
        </div>
        <button onClick={handleScrollToTop}>Go Top</button>
        <div ref={bottomRef}></div>
      </div>
    </>
  )
}

export default App
