import { Link } from 'react-router-dom'

export default function PlaceCard({ place }) {
  return (
    <div className="card h-100">
      <img
        src={place.image}
        className="card-img-top"
        alt={place.name}
        style={{ height: '220px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <small className="text-purple">{place.region}</small>
        <h3 className="card-title">{place.name}</h3>
        <p className="card-text">{place.text}</p>
        <Link to={`/places/${place.id}`} className="btn btn-purple mt-auto">
          View
        </Link>
      </div>
    </div>
  )
}