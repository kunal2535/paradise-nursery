import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/CartSlice.jsx";
export default function CartItem() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <>
      <Navbar />
      <main className="page cart-page">
        <h1>Shopping Cart</h1>
        <div className="cart-summary">
          <span>
            Total plants: <b>{totalQuantity}</b>
          </span>
          <span>
            Total amount: <b>${total.toFixed(2)}</b>
          </span>
        </div>
        {items.length === 0 ? (
          <div className="empty">
            <p>Your cart is empty.</p>
            <Link className="primary-link" to="/plants">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <section>
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-info">
                    <h2>{item.name}</h2>
                    <p>Unit price: ${item.price.toFixed(2)}</p>
                    <p>
                      Item total:{" "}
                      <b>${(item.price * item.quantity).toFixed(2)}</b>
                    </p>
                  </div>
                  <div className="quantity">
                    <button
                      aria-label={`Decrease ${item.name}`}
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      aria-label={`Increase ${item.name}`}
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="delete"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </article>
              ))}
            </section>
            <aside className="checkout-card">
              <h2>Order Summary</h2>
              <p>{totalQuantity} item(s)</p>
              <h3>Total: ${total.toFixed(2)}</h3>
              <button onClick={() => alert("Checkout coming soon!")}>
                Checkout
              </button>
              <Link to="/plants">Continue Shopping</Link>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}
