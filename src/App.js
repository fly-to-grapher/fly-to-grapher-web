import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Videos from "./components/videos/Videos";
import Footer from "./components/footer/Footer";
import Upload from "./components/upload/Upload";
import Categories from "./components/categories/Categories";
import MyProfile from "./components/profile/myProfile";
import UserProfile from "./components/profile/userProfile";
import EditProfile from "./components/profile/editProfile";
import SingleCategory from "./components/categories/SingleCategory";
import SingleFile from "./components/single file/SingleFile";
import Password from "./components/profile/ChangePassword";
import Avatar from "./components/profile/UpdateAvatar";

const App = () => {
  return (
    // <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/password" element={<Password />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/s-category/:id" element={<SingleCategory />} />
        <Route path="/s-file" element={<SingleFile />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
      <Footer />
    </>
    // </BrowserRouter>
  );
};

export default App;
