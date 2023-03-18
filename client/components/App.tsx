import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Clock from './Clock'
import Nav from './Nav'
import NowCalc from './NowCalc'

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/now" element={<NowCalc />}></Route>
        <Route path="/" element={<Clock />}></Route>
      </Routes>
    </main>
  )
}

export default App
