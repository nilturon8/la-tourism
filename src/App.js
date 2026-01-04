import { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MediaSection from "./components/MediaSection";
import Activities from "./components/Activities";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import activities from "./data/activities";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (activity) => {
    setCart((prev) => [...prev, activity]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <MediaSection />
        <Activities activities={activities} onAdd={addToCart} />
        <Cart items={cart} onRemove={removeFromCart} onClear={clearCart} />
      </main>
      <Footer />
    </div>
  );
}
