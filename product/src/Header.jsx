import { Link } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>🛍 KapilWithGrow</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header;