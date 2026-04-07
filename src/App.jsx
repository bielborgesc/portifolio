import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Curriculo from './pages/Curriculo'
import NotFound from './pages/NotFound'

function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
    </ThemeProvider>
  )
}
