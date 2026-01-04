export default function Activities({ activities, onAdd }) {
  const list = Array.isArray(activities) ? activities : [];

  return (
    <section id="activities" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Activities</h2>
          <p>Select an activity and add it to your cart.</p>
        </div>

        <div className="activities">
          {list.map((a) => (
            <div key={a.id} className="card">
              <h3>{a.title}</h3>
              <p className="muted">{a.description}</p>
              <p>
                <b>Duration:</b> {a.duration}
              </p>
              <p>
                <b>Price:</b> {a.price === 0 ? "Free" : `${a.price}€`}
              </p>

              <button className="btn" type="button" onClick={() => onAdd(a)}>
                Add to cart
              </button>
            </div>
          ))}

          {list.length === 0 && <p className="muted">No activities found.</p>}
        </div>
      </div>
    </section>
  );
}
