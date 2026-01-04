export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <span className="brand__logo">LA</span>
          <span className="brand__text">Los Angeles Tourism</span>
        </div>

        <nav className="nav">
          <a href="#media">Multimedia</a>
          <a href="#activities">Activities</a>
          <a href="#cart">Cart</a>
        </nav>
      </div>
    </header>
  );
}
