import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<About />} />
        <Route path='/contato' element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App