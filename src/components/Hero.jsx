import "../styles/hero.css";

import appPreview from "../assets/app-preview.png"; // We'll add this image next

function Hero() {
  return (
    <section id="about" className="hero">

      <div className="hero-content">

        <p className="hero-label">
          THE WORLD'S FASTEST SNEAKER AND STREETWEAR DELIVERY PLATFORM
        </p>
        <h1>
          Find Your Next Pair.
        </h1>
        <p className="hero-description">
          Discover live sneaker inventory from trusted local retailers,
          browse your favorite brands, and download the app to start
          shopping smarter.
        </p>
        <div className="hero-buttons">
          <a href="#download" className="primary-btn">
            Download App
          </a>
          <a href="#brands" className="secondary-btn">
            Browse Brands
          </a>
        </div>

        <div className="hero-features">
          <span>✓ Trusted Stores</span>
          <span>✓ Live Inventory</span>
          <span>✓ Fast Delivery</span>
        </div>
      </div>

      <div className="hero-image">

        <div className="phone-glow"></div>
        <img
          src={appPreview}
          alt="Drop The Laces App"
          onClick={() => window.open("#download", "_self")}
        />
      </div>

    </section>
  );
}

export default Hero;