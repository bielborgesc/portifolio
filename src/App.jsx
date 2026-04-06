import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Curriculo from './pages/Curriculo'

function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <div className="max-w-5xl mx-auto px-6">
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>
    </BrowserRouter>
  )
}
