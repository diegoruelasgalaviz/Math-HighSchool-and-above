import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import Documents from './pages/Documents.jsx'
import SubjectDetail from './pages/SubjectDetail.jsx'
import Gamify from './pages/Gamify.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/:subjectId" element={<SubjectDetail />} />
          <Route path="/gamify" element={<Gamify />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
