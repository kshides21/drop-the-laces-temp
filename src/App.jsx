import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/sections.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Partners from "./Components/Partners";
import Brands from "./Components/Brands";
import AppDownload from "./Components/AppDownload";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Partners />
      <Brands />
      <AppDownload />

      <Footer />
    </>
  );
}

export default App;
