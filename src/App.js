import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav"
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login"
import Videos from "./components/videos/Videos"
// import './Style.css';







const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
