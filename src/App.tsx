import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TVPlayDeepDive from "./components/TVPlayDeepDive";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <TVPlayDeepDive />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
