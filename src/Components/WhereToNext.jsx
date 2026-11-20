import { Link } from 'react-router-dom'

const places = [
  { id: 1, region: 'South America', name: 'Patagonia', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKxjdY_yaG8yYCisfyxsiXBnvCJB9NiEo5vEHVNjJ_A&s=10' },
  { id: 2, region: 'Africa', name: 'Kenya', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkucNfd9wg0bbGdMyx_y6RyqKOLQ3Z10SX4hWJt2f6g&s=10' },
  { id: 3, region: 'Asia', name: 'Bali', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRWJ3lc04RShuc8WfANjabeE8iPsybeMq4ZFOddibjA&s=10' },
  { id: 4, region: 'Europe', name: 'Swiss Alps', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqwzctEjA6hAPaKwWGKB4ARdY24X3Gp2jWVRc5cnGEQ&s=10' },
]

export default function WhereToNext() {
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
        {places.map((p, index) => (
          <div
            className={index % 2 === 1 ? 'col-6 col-md-3 mt-md-5' : 'col-6 col-md-3'}
            key={p.id}
          >
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
          </div>
        ))}
      </div>
    </section>
  )
}