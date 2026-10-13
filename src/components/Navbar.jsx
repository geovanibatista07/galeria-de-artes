export function Navbar({ artists }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top border-bottom border-secondary">
      <div className="container">
        <a className="navbar-brand fw-bold text-warning" href="#">Galeria de Artes</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {artists.map(a => (
              <li className="nav-item" key={a.id}>
                <a className="nav-link" href={`#${a.id}`}>{a.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}