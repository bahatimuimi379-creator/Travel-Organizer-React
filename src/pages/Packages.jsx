import { useState, useEffect, useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import PackageRow from '../Components/PackageRow'

const url = 'http://localhost:3001/packages'

export default function Packages() {
  const { isAdmin } = useContext(AuthContext)
  const [packages, setPackages] = useState([])
  const [name, setName] = useState('')
  const [place, setPlace] = useState('')
  const [price, setPrice] = useState('')

  const [searchParams] = useSearchParams()
  const placeFilter = searchParams.get('place')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackages(data))
  }, [])

  const shown = placeFilter
    ? packages.filter((p) => p.place.toLowerCase() === placeFilter.toLowerCase())
    : packages

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
      <h1 className="text-purple mb-2">
        {placeFilter ? `Packages for ${placeFilter}` : 'Packages'}
      </h1>
      {placeFilter && (
        <p>
          <Link to="/packages" className="text-purple">Show all packages</Link>
        </p>
      )}

      {isAdmin ? (
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
      ) : (
        <p className="mb-4">
          Only the admin can change packages.{' '}
          <Link to="/login" className="text-purple">Admin login</Link>
        </p>
      )}

      {shown.length === 0 ? (
        <p>{placeFilter ? `No packages for ${placeFilter} yet.` : 'No packages yet.'}</p>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Package</th>
                <th>Place</th>
                <th>Price</th>
                {isAdmin && <th></th>}
              </tr>
            </thead>
            <tbody>
              {shown.map((p) => (
                <PackageRow
                  key={p.id}
                  pack={p}
                  isAdmin={isAdmin}
                  onChangePrice={handleChangePrice}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}