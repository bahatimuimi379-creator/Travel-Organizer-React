import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="container text-center py-5">
      <h1 className="display-3">Travel Organizer</h1>
      <p className="lead">Plan the trip. Then go.</p>
      <p>
        Search countries by region, keep a daily budget for each place
        and keep every trip in one place.
      </p>
      <Link className="btn btn-dark" to="/places">Start planning</Link>
    </section>
  )
}