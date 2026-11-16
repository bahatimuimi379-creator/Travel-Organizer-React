import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand" to="/">Travel Organizer</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/places">Places</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">Admin Portal</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}