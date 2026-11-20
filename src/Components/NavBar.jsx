import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function NavBar() {
  const { isAdmin, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-purple sticky-top">
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand" to="/">Travel Planner</NavLink>

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
          <ul className="navbar-nav ms-auto align-items-md-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/places">Places</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/packages">Packages</NavLink>
            </li>
            <li className="nav-item">
              {isAdmin ? (
                <button className="btn btn-light btn-sm ms-md-2" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <NavLink className="nav-link" to="/login">Admin Login</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}