import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import Brands from "./components/Brands";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

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