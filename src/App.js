import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login"
import Videos from "./components/videos/Videos"
import Footer from "./components/footer/Footer";
import Upload from "./components/upload/Upload";
import Categories from "./components/categories/Categories";
import Profile from "./components/profile/Profile";
import editProfile from './components/profile/editProfile'
import SingleCategory from "./components/categories/SingleCategory"





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<editProfile />} />
        <Route path="/s-category" element={<SingleCategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;