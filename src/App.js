import React from "react"
import { Route } from "react-router-dom"

export const App = () =>{
  return (
    <div>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </div>
  )
}