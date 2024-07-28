import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage'
import DropDown from './components/dropDown'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
