import { useState, useEffect } from 'react'
import PlaceCard from '../Components/PlaceCard'

const regions = ['All', 'Africa', 'Asia', 'South America', 'Europe']
const perPage = 3

export default function Places() {
  const [places, setPlaces] = useState([])
  const [region, setRegion] = useState('All')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch('http://localhost:3001/places')
      .then((res) => res.json())
      .then((data) => setPlaces(data))
  }, [])

  const filtered = places.filter((p) => {
    const matchesRegion = region === 'All' || p.region === region
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchesRegion && matchesSearch
  })

  // Pagination: work out how many pages, then cut out the current page
  const totalPages = Math.ceil(filtered.length / perPage)
  const start = (page - 1) * perPage
  const shown = filtered.slice(start, start + perPage)

  function handleSearch(e) {
    setSearch(e.target.value)
    setPage(1)
  }

  function handleRegion(r) {
    setRegion(r)
    setPage(1)
  }

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
            onChange={handleSearch}
          />
        </div>

        {regions.map((r) => (
          <button
            key={r}
            className="btn btn-light m-1"
            onClick={() => handleRegion(r)}
          >
            {r}
          </button>
        ))}
      </section>

      <section className="container py-5">
        {shown.length === 0 && <p className="text-center">No places found.</p>}

        <div className="row g-4">
          {shown.map((p) => (
            <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
              <PlaceCard place={p} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <button
              className="btn btn-outline-purple"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                className={n === page ? 'btn btn-purple' : 'btn btn-outline-purple'}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}

            <button
              className="btn btn-outline-purple"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  )
}