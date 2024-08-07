import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts(){
    try{
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count*20
        }`
      );

      const result = await response.json();

      if(result && result.products && result.products.length > 0){
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    }
    catch(e){
      console.log('Error fetching products', e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(products && products.length === 100){
      setDisableBtn(true);
    }
  },[products])


  if(loading){
    return <div>Loading Data! Please Wait... </div>
  }

  return (
    <>
      <div className="main">
        <div className="product-container">
          {
            (products && products.length > 0) ?
            products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
            : null
          }
        </div>
        <div>
          <button 
          className="btn" 
          disabled = {disableBtn}
          onClick={() => {
            setCount(count + 1);
          }}>
            Load More Products
          </button>
          {
            disableBtn === true ? <p>Limit Reached</p> : null
          }
        </div>
      </div>
    </>
  )
}

export default App
