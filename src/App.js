import { Fragment } from "react";
import Helmet from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Admin/AdminDashboard/Profile";
import Main from "./Admin/AdminDashboard/main";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup";
import Login from "./components/login";
const App=()=> {
  return (
    <Fragment>
    <Helmet><title>TestShala</title></Helmet>
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<Navbar />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/admindashboard" element={<Main/>}/>
    <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </Fragment>
    
    
  );
}

export default App;
