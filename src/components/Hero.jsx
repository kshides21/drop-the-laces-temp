export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <h1>Drop the Laces</h1>
        <p>Discover gear, brands, and stores all in one place.</p>

        <a href="#download" className="cta">
          Download the App
        </a>
      </div>
      <aside className="hero-panel">
        <div className="hero-panel__label">Featured drop</div>
        <div className="hero-panel__card">
          <div className="hero-panel__title">Retro Runner</div>
          <p>Limited colorway. Fast delivery from local sneaker shops.</p>
          <div className="hero-panel__meta">
            <span>Best seller</span>
            <span>2h delivery</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
