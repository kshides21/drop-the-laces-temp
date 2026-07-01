import "../styles/sections.css";
import adidasLogo from "../assets/brands/adidas.jpg";
import nikeLogo from "../assets/brands/nike.png";
import jordanLogo from "../assets/brands/jordan.png";
import newBalanceLogo from "../assets/brands/newbalance.png";
import reebokLogo from "../assets/brands/reebok.png";

const brands = [
  { id: 1, name: "Adidas", logo: adidasLogo },
  { id: 2, name: "Nike", logo: nikeLogo },
  { id: 3, name: "Jordan", logo: jordanLogo },
  { id: 4, name: "New Balance", logo: newBalanceLogo },
  { id: 5, name: "Reebok", logo: reebokLogo },
];

function BrandCard({ name, logo }) {
  return (
    <button className="brand-card">
      <div className="brand-logo">
        <img src={logo} alt={name} />
      </div>
      <p className="brand-name">{name}</p>
    </button>
  );
}

export default function Brands() {
  return (
    <section id="brands" className="brands-section">
      <h2 className="brands-title">Shop Your Favorite Brands</h2>
      <div className="brands-grid">
        {brands.map((brand) => (
          <BrandCard key={brand.id} name={brand.name} logo={brand.logo} />
        ))}
      </div>
    </section>
  );
}
