export default function PackageRow({ pack, isAdmin, onChangePrice, onDelete }) {
  return (
    <tr>
      <td>{pack.name}</td>
      <td>{pack.place}</td>
      <td>${pack.price}</td>
      {isAdmin && (
        <td className="text-end">
          <button
            className="btn btn-outline-purple btn-sm me-2"
            onClick={() => onChangePrice(pack)}
          >
            Change price
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(pack.id)}
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  )
}