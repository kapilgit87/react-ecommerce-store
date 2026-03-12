import { Link } from "react-router-dom";
import Header from "./Header";
import heroImg from "./assets/2.jpg";
function Home() {
  return (
    <div>
<Header></Header>
   
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Store</h1>
          <p>Discover amazing products at the best prices! Quality you can trust.</p>
          <button className="cta-btn"><Link to="/product">Shop Now</Link></button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Shopping" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Shop With Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your orders delivered quickly and safely.</p>
          </div>
          <div className="feature-card">
            <h3>💳 Secure Payment</h3>
            <p>All transactions are 100% secure and encrypted.</p>
          </div>
          <div className="feature-card">
            <h3>🏆 Quality Products</h3>
            <p>We ensure the best quality in every product we sell.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to explore our products?</h2>
        <button className="cta-btn"><Link to="/product">View Products</Link></button>
      </section>

    </div>
     </div>
  )
}

export default Home;