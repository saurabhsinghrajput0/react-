import React from 'react'
import Forms from './Hooks/Forms'
import UseEffect from './Hooks/UseEffect'
import Useref from './Hooks/Useref'
import Usereftimer from './Hooks/Usereftimer'
import Previous from './Hooks/Previous'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Portfolio from './Hooks/Portfolio'
import Seek from './Hooks/seek'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/seek" element={<Seek/>}/>
        <Route path="/" element={<Forms />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useref" element={<Useref />} />
        <Route path="/timer" element={<Usereftimer />} />
        <Route path="/previous" element={<Previous />} />
        <Route path="/forms" element={<Forms/>}/>
        <Route path="/me" element={<Portfolio/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App