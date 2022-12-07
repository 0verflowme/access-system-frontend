
import NavBar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import Signup from "./components/Signup"
import AddMembers from "./components/AddMembers"
function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<AddMembers />} />
        {/* <Route path="/dashboard" element={<AddMembers />} /> */}
        {/* <Route path="/billing" element={ } /> */}
      </Routes>
    </div>
  )
}

export default App
