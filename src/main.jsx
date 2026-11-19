import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { PlacesProvider } from './context/PlacesContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlacesProvider>
        <App />
      </PlacesProvider>
    </BrowserRouter>
  </StrictMode>
)