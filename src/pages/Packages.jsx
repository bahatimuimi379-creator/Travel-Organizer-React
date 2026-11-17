import { useState, useEffect } from 'react'

const url = 'http://localhost:3001/packages'

export default function Packages() {
  const [packages, setPackages] = useState([])
  const [name, setName] = useState('')
  const [place, setPlace] = useState('')
  const [price, setPrice] = useState('')

  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackages(data))
  }, [])


  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !place || !price) return

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, place, price: Number(price) }),
    })
      .then((res) => res.json())
      .then((newPackage) => {
        setPackages([...packages, newPackage])
        setName('')
        setPlace('')
        setPrice('')
      })
  }

  
  function handleChangePrice(p) {
    const newPrice = prompt('New price for ' + p.name, p.price)
    if (!newPrice || Number(newPrice) <= 0) return

    fetch(`${url}/${p.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: Number(newPrice) }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setPackages(packages.map((item) => (item.id === p.id ? updated : item)))
      })
  }

  
  function handleDelete(id) {
    fetch(`${url}/${id}`, { method: 'DELETE' }).then(() => {
      setPackages(packages.filter((p) => p.id !== id))
    })
  }

  return (
    <section className="container py-4">
      <h1 className="text-purple mb-4">Packages</h1>

      <form onSubmit={handleSubmit} className="row g-2 mb-4">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Package name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-purple w-100" type="submit">
            Add
          </button>
        </div>
      </form>

      {packages.length === 0 && <p>No packages yet add one above</p>}

      <div className="row">
        {packages.map((p) => (
          <div className="col-md-4 mb-4" key={p.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.place}</p>
                <p className="fw-bold">${p.price}</p>
                <button
                  className="btn btn-outline-purple btn-sm me-2"
                  onClick={() => handleChangePrice(p)}
                >
                  Change price
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}