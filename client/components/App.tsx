import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Nav from './Nav'
import Splash from './Splash'
import Clock from './Clock'
import Now from './Now'
import Wake from './Wake'
import Sleep from './Sleep'

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/clock" element={<Clock />}></Route>
        <Route path="/now" element={<Now />}></Route>
        <Route path="/wake" element={<Wake />}></Route>
        <Route path="/sleep" element={<Sleep />}></Route>
      </Routes>
    </main>
  )
}

export default App
