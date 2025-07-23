import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HighlightsSection from './components/HighlightsSection'
import JamesSection from './components/JamesSection'
import MaurisSection from './components/MaurisSections'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    <Navbar/>
    <HeroSection/>
    <HighlightsSection/>
    <JamesSection/>
    <MaurisSection/>
    </div>
  )
}

export default App
