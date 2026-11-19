import { createContext, useState, useEffect } from 'react'

export const PlacesContext = createContext()

export function PlacesProvider({ children }) {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/places')
      .then((res) => res.json())
      .then((data) => setPlaces(data))
  }, [])

  return (
    <PlacesContext.Provider value={{ places }}>
      {children}
    </PlacesContext.Provider>
  )
}