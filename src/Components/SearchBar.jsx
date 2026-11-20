export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      className="form-control"
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}