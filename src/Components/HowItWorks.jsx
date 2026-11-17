const steps = [
  { title: 'Browse', text: 'Search destinations by name country or region' },
  { title: 'Compare', text: 'Check the daily packages for each place' },
  { title: 'Places', text: 'Check out places you can vist in different countries and regions' },
]

export default function HowItWorks() {
  return (
    <section className="container py-5">
      <h2 className="text-purple text-center mb-4">How it works</h2>
      <div className="row g-4 text-center">
        {steps.map((s, i) => (
          <div className="col-md-4" key={s.title}>
            <div
              className="bg-purple text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: '64px', height: '64px', fontSize: '1.5rem' }}
            >
              {i + 1}
            </div>
            <h3 className="h5">{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}