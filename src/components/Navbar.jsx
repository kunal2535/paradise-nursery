import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const count = useSelector((s) =>
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0),
  );
  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        🌿 Paradise Nursery
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart">
          🛒 Cart <span>{count}</span>
        </Link>
      </div>
    </nav>
  );
}
