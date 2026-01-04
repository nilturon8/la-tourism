export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>Discover Los Angeles</h1>
          <p>
            Beaches, cinema, museums, viewpoints, and great food. Build your plan
            and save it to your cart.
          </p>
          <div className="hero__actions">
            <a className="btn" href="#activities">
              Explore activities
            </a>
            <a className="btn btn--ghost" href="#media">
              View multimedia
            </a>
          </div>
        </div>

        <div className="hero__card">
          <h3>Quick tip</h3>
          <p>
            Combine <b>Griffith Observatory</b> at sunset with a <b>DTLA food
            tour</b> at night for an amazing day.
          </p>
          <ul className="hero__bullets">
            <li>⚡ Fast and visual</li>
            <li>🧭 Clear sections</li>
            <li>🛒 Interactive cart</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
