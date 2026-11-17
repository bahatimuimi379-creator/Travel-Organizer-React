import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="text-white pt-5" style={{ backgroundColor: '#c9a7f5' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="text-uppercase fw-bold mb-3">Explore</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link className="text-decoration-none text-secondary" to="/">About Us</Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none text-secondary" to="/places">Places</Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none text-secondary" to="/packages">Packages</Link>
              </li>
             
            </ul>
          </div>

          <div className="col-md-6">
            <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled text-secondary">
              <li className="d-flex gap-3 mb-3">
                <i className="bi bi-geo-alt fs-5" style={{ color: '#c9a7f5' }}></i>
                <span>Nairobi,Kenya</span>
              </li>
              <li className="d-flex gap-3 mb-3">
                <i className="bi bi-telephone fs-5" style={{ color: '#c9a7f5' }}></i>
                <span>+254706683129</span>
              </li>
              <li className="d-flex gap-3 mb-3">
                <i className="bi bi-envelope fs-5" style={{ color: '#c9a7f5' }}></i>
                <span>hello@organizer.com</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-secondary border-top border-secondary py-3 mt-3 mb-0">
          ©2026 Travel Planner. Experience the world with us.
        </p>
      </div>
    </footer>
  )
}