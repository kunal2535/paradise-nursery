import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/CartSlice.jsx";
import { categories } from "../data/plants.js";
import Navbar from "./Navbar.jsx";
export default function ProductList() {
  const dispatch = useDispatch();
  const itemIds = useSelector((s) => new Set(s.cart.items.map((i) => i.id)));
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="page-heading">
          <h1>Houseplants</h1>
          <p>Choose a plant and add it to your cart.</p>
        </div>
        {categories.map((category) => (
          <section className="category" key={category.name}>
            <h2>{category.name}</h2>
            <div className="product-grid">
              {category.plants.map((plant) => (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-body">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <strong>${plant.price.toFixed(2)}</strong>
                    <button
                      disabled={itemIds.has(plant.id)}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {itemIds.has(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
