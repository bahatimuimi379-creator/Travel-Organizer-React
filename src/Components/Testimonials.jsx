const reviews = [
  {
    id: 1,
    name: 'Amina ',
    place: 'Nairobi, Kenya',
    text: 'I found the perfect safari package in minutes and could compare prices easily',
  },
  {
    id: 2,
    name: 'Daniel ',
    place: 'Kampala, Uganda',
    text: 'Filtering by region made planning our honeymoon so much simpler',
  },
  {
    id: 3,
    name: 'Grace ',
    place: 'Mombasa, Kenya',
    text: 'Great destinations and clear prices I booked my trip to Bali the same day',
  },
]

export default function Testimonials() {
  return (
    <section className="container py-5">
      <h2 className="text-purple text-center mb-4">What travellers say</h2>
      <div className="row g-4">
        {reviews.map((r) => (
          <div className="col-md-4" key={r.id}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <p className="card-text">"{r.text}"</p>
                <p className="mb-0 fw-bold text-purple">{r.name}</p>
                <small>{r.place}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}