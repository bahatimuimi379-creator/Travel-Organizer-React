import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PlacesContext } from '../context/PlacesContext'

export default function WhereToNext() {
  const { places } = useContext(PlacesContext)

  // Show the first four places from the database
  const featured = places.slice(0, 4)

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <small className="text-uppercase fw-bold text-purple">Where to next</small>
          <h2 className="text-uppercase fw-bold text-purple">Popular Destinations</h2>
        </div>
        <Link to="/places" className="text-purple fw-bold text-decoration-none">
          View All →
        </Link>
      </div>

      <div className="row g-4 pb-5">
        {featured.map((p, index) => (
          <div
            className={index % 2 === 1 ? 'col-6 col-md-3 mt-md-5' : 'col-6 col-md-3'}
            key={p.id}
          >
            <Link to={`/places/${p.id}`} className="text-decoration-none">
              <div
                className="rounded-4 text-white d-flex flex-column justify-content-end p-3"
                style={{
                  height: '380px',
                  backgroundColor: '#6f42c1',
                  backgroundImage: `linear-gradient(transparent 50%, rgba(0,0,0,0.7)), url('${p.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <small>{p.region}</small>
                <h3 className="text-uppercase fw-bold">{p.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}