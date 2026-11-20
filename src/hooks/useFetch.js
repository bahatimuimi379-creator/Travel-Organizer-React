import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        return res.json()
      })
      .then((result) => setData(result))
      .catch(() => setError('Could not load data. Is the server running?'))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}