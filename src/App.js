import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./page/Home"
import { About } from "./page/About"
import { Profile } from "./page/Profile"

 const App = () =>{
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </div>
  )
}
export default App;