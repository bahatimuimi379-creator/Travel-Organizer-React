import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const regions = ['All', 'Africa', 'Asia', 'South America', 'Europe']

export default function Places() {
  const [places, setPlaces] = useState([])
  const [region, setRegion] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/places')
      .then((res) => res.json())
      .then((data) => setPlaces(data))
  }, [])

  const shown = places.filter((p) => {
    const matchesRegion = region === 'All' || p.region === region
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchesRegion && matchesSearch
  })

  return (
    <div>
      <section className="bg-purple text-white text-center py-5">
        <h1>The World Awaits</h1>
        <p>Search for a place or pick a region.</p>

        <div className="container mb-3" style={{ maxWidth: '400px' }}>
          <input
            className="form-control"
            type="search"
            placeholder="Search places..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {regions.map((r) => (
          <button
            key={r}
            className="btn btn-light m-1"
            onClick={() => setRegion(r)}
          >
            {r}
          </button>
        ))}
      </section>

      <section className="container py-5">
        {shown.length === 0 && <p className="text-center">No places found.</p>}

        <div className="row">
          {shown.map((p) => (
            <div className="col-md-4 mb-4" key={p.id}>
              <div className="card h-100">
                <img src={p.image} className="card-img-top" alt={p.name} />
                <div className="card-body">
                  <small className="text-purple">{p.region}</small>
                  <h3 className="card-title">{p.name}</h3>
                  <p className="card-text">{p.text}</p>
                  <Link to="/packages" className="btn btn-purple">
                    View Packages
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}