import React from 'react'
import Map1 from "./Map1"
import Map2 from "./Mao2"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
    <Route path = "/" element={<Map1/>}></Route>
    <Route path = "Map1" element={<Map1/>}></Route>
    <Route path = "Map2" element={<Map2/>}></Route>
    </Routes>
  )
}

export default App