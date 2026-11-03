import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
function Landing() {
  return (
    <main className="landing">
      <div className="overlay">
        <section className="hero">
          <div>
            <p className="eyebrow">Bring nature indoors</p>
            <h1>Paradise Nursery</h1>
            <p>
              Discover beautiful houseplants for every room, light level, and
              lifestyle.
            </p>
            <Link to="/plants">Get Started</Link>
          </div>
          <AboutUs />
        </section>
      </div>
    </main>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
