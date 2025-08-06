import { useState } from 'react'

import './App.css'

import Home from './pages/Home'

import RootLayout from './layout/RootLayout'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Shop from './pages/Shop'
import Contacts from './pages/Contacts'
import Error from './pages/Error'
// import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
