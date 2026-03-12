import { useEffect, useState } from "react";
import './ProductGrid.css';
import Header from "./Header";
import Footer from "./Footer";
function ProductGrid(){
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetchProducts();
  },[]);

  async function fetchProducts(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }

  return(
    <>
    <Header></Header>
    <div className="grid">
      {products.map((item)=>(
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p className="price">${item.price}</p>
          <p className="category">{item.category}</p>
          <p className="desc">{item.description.slice(0,80)}...</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
    <Footer></Footer>
    </>
  )
}

export default ProductGrid;