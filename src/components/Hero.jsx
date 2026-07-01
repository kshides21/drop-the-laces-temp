import "../styles/hero.css";

import appPreview from "../assets/app-preview.png"; // We'll add this image next

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-label">
          THE FUTURE OF LOCAL SNEAKER SHOPPING
        </p>
        <h1>
          Find Your Next Pair.
          <br />
          Without Leaving Home.
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
        />
      </div>

    </section>
  );
}

export default Hero;