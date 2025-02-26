import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import ContentSection from './components/ContentSection'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero />
      <ContentSection />
      <Register />
      <Footer />
      <div style={{height: '20px'}}></div>
    </div>
  )
}

export default App
