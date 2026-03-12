import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import "./App.css";
import { Routes,Route } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/product" element={<ProductGrid></ProductGrid>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  )
}

export default App;