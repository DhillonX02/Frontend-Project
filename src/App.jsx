import { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
