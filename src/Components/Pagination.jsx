export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null

  const numbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
      <button
        className="btn btn-outline-purple"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </button>

      {numbers.map((n) => (
        <button
          key={n}
          className={n === page ? 'btn btn-purple' : 'btn btn-outline-purple'}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}

      <button
        className="btn btn-outline-purple"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </div>
  )
}