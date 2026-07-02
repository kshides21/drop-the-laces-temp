import "../styles/sections.css";

export default function AppDownload() {
  return (
    <section id="download" className="download-section">
      <div className="download-panel">
        <p className="download-label">Available on iOS and Android</p>

        <h2 className="download-heading">Download the app and shop faster.</h2>

        <p className="download-copy">
          Browse curated brands, save your favorites, and launch deals with one
          tap.
        </p>

        <div className="download-actions">
          <a
            href="https://apps.apple.com/us/app/drop-the-laces/id6764883595"
            target="_blank"
            rel="noreferrer"
            className="download-link app-store"
          >
            <span>Download on</span>
            <strong>App Store</strong>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.owl.dropthelaces&hl=en_US"
            target="_blank"
            rel="noreferrer"
            className="download-link google-play"
          >
            <span>Get it on</span>
            <strong>Google Play</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
