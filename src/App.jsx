import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import ContentSection from './components/ContentSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero />
      <ContentSection />
      <div style={{height: '300px'}}></div>
    </div>
  )
}

export default App
