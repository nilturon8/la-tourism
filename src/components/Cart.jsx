export default function Cart({ items, onRemove, onClear }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="cart" className="section">
      <div className="container">
        <h2>Cart</h2>

        {items.length === 0 ? (
          <p>No activities selected yet.</p>
        ) : (
          <>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item.title} – {item.price}€
                  <button onClick={() => onRemove(index)}>Eliminar</button>
                </li>
              ))}
            </ul>

            <p><b>Total:</b> {total}€</p>
            <button className="btn" onClick={onClear}>Clear cart</button>
          </>
        )}
      </div>
    </section>
  );
}
