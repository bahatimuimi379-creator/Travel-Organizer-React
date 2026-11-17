import { Link } from 'react-router-dom'

export default function DestinationCard({ destination }) {
  const { region, name, description, image } = destination

  return (
    <div
      className="position-relative rounded-4 overflow-hidden text-white h-100"
      style={{
        minHeight: '420px',
        backgroundColor: '#6f42c1',
        backgroundImage: image ? `url('${image}')` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,0.85))',
        }}
      ></div>

      <div className="position-absolute bottom-0 start-0 p-4">
        <small
          className="text-uppercase fw-bold"
          style={{ color: '#d9b8ff', letterSpacing: '1px' }}
        >
          {region}
        </small>
        <h3 className="text-uppercase fw-bold">{name}</h3>
        <p>{description}</p>
        <Link
          to="/packages"
          className="text-white fw-bold text-decoration-none pb-1"
          style={{ borderBottom: '2px solid #c9a7f5' }}
        >
          View Packages
        </Link>
      </div>
    </div>
  )
}