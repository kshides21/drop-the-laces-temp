import "../styles/sections.css";
import partnerOne from "../assets/stores/xhibition.png";
import partnerTwo from "../assets/stores/next.png";

const partners = [
  { id: 1, name: "Xhibition", logo: partnerOne },
  { id: 2, name: "Next", logo: partnerTwo },
];

function PartnerCard({ name, logo }) {
  return (
    <button className="brand-card">
      <div className="brand-logo">
        <img src={logo} alt={name} />
      </div>
      <p className="brand-name">{name}</p>
    </button>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="brands-section">
      <h2 className="brands-title">Partner Stores</h2>
      <div className="brands-grid">
        {partners.map((p) => (
          <PartnerCard key={p.id} name={p.name} logo={p.logo} />
        ))}
      </div>
    </section>
  );
}
