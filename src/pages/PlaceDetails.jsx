import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PlaceDetails() {
  const { id } = useParams()
  const [place, setPlace] = useState(null)
  const [packages, setPackages] = useState([])
  const [current, setCurrent] = useState(0)
  const [booked, setBooked] = useState('')
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setCurrent(0)
    setBooked('')

    fetch(`http://localhost:3001/places/${id}`).then((res) => {
      if (!res.ok) {
        setNotFound(true)
        return
      }
      res.json().then((data) => setPlace(data))
    })

    fetch('http://localhost:3001/packages')
      .then((res) => res.json())
      .then((data) => setPackages(data))
  }, [id])

  if (notFound) {
    return (
      <section className="container py-5">
        <p>Place not found.</p>
        <Link to="/places" className="text-purple">Back to places</Link>
      </section>
    )
  }

  if (!place) {
    return <p className="container py-5">Loading...</p>
  }

  const images = [place.image, ...(place.images || [])]
  const activities = place.activities || []

  const placePackages = packages.filter(
    (p) => p.place.toLowerCase() === place.name.toLowerCase()
  )

  function previous() {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  function next() {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  return (
    <section className="container py-4" style={{ maxWidth: '900px' }}>
      <Link to="/places" className="text-purple">← Back to places</Link>

      <div className="border border-2 rounded-4 bg-white p-4 mt-3">
        <h1 className="text-purple h2 mb-0">{place.name}</h1>
        <small className="text-purple">{place.region}</small>

        <div
          className="position-relative mx-auto mt-3"
          style={{ maxWidth: '640px' }}
        >
          <img
            src={images[current]}
            alt={`${place.name} ${current + 1}`}
            className="d-block w-100 rounded-4"
            style={{ height: '320px', objectFit: 'cover' }}
          />

          {images.length > 1 && (
            <>
              <button
                className="btn btn-light btn-sm position-absolute top-50 start-0 translate-middle-y ms-2"
                onClick={previous}
              >
                ‹
              </button>
              <button
                className="btn btn-light btn-sm position-absolute top-50 end-0 translate-middle-y me-2"
                onClick={next}
              >
                ›
              </button>
              <small className="position-absolute bottom-0 end-0 m-2 px-2 rounded bg-dark text-white">
                {current + 1} / {images.length}
              </small>
            </>
          )}
        </div>

        <div className="row g-4 mt-3">
          <div className="col-md-7">
            <h3 className="text-purple h5">Details</h3>
            <p>{place.text}</p>

            <h3 className="text-purple h5 mt-4">Activities</h3>
            {activities.length === 0 ? (
              <p>No activities listed yet.</p>
            ) : (
              <ul>
                {activities.map((a, index) => (
                  <li key={index}>{a}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="col-md-5">
            <div className="border border-2 rounded-4 p-3">
              <h3 className="text-purple h5">Packages</h3>

              {placePackages.length === 0 && <p>No packages for this place yet.</p>}

              {placePackages.map((p) => (
                <div
                  key={p.id}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <span>{p.name} ${p.price}</span>
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => setBooked(p.name)}
                  >
                    Book
                  </button>
                </div>
              ))}

              {booked && <p className="text-success mb-0">You booked {booked}.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}