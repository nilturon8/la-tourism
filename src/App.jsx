import { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MediaSection from "./components/MediaSection";
import Activities from "./components/Activities";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import activitiesData from "./data/activities";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (activity) => {
    setCart([...cart, activity]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header />
      <Hero />
      <MediaSection />
      <Activities activities={activitiesData} onAdd={addToCart} />
      <Cart items={cart} onRemove={removeFromCart} onClear={clearCart} />
      <Footer />
    </>
  );
}

export default App;
