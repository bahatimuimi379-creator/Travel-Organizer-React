import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Places from './pages/Places'
import Packages from './pages/Packages'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="*" element={<p className="container py-4">Page not found.</p>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

