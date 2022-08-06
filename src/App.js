import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav"
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login"
import Videos from "./components/videos/Videos"
import Footer from "./components/footer/Footer";
import Upload from "./components/upload/Upload";

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
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
