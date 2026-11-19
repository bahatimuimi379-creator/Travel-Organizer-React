import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <header
      className="d-flex align-items-center text-center text-white"
      style={{
        minHeight: '85vh',
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_11EnNwQaJZsuGfW2FhtIIMnt17gL2SAJ1PbiVbe9g&s=10')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container py-5">
        <h1 className="display-2 fw-bold">Meet  your perfect destination</h1>
        <p className="lead mb-4">
          Plan your next destination with Our Travel Organizer
        </p>
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <Link className="btn btn-purple btn-lg" to="/places">
            Book A trip
          </Link>
          <a className="btn btn-outline-light btn-lg" href="#about">
            About
          </a>
        </div>
      </div>
    </header>
  )
}