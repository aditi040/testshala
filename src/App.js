import { Fragment } from "react";
import Helmet from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Admin/AdminDashboard/Categories";
import Profile from "./Admin/AdminDashboard/Profile";
import Sidebar from "./Admin/AdminDashboard/Sidebar";
import Main from "./Admin/AdminDashboard/main";
import TestResult from "./components/Givetest/TestResult";
import { APPWithRouter } from "./components/Givetest/Testpage";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup";
import Login from "./components/login";
import Bar from "./pages/admin/bar";
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
    <Route path="/category" element={<Category/>}/>
    <Route path="/bar" element={<Bar/>}/>
    <Route path="/sidebar" element={<Sidebar/>}/>
    <Route path="/testpage" element={<APPWithRouter/>}/>
    <Route path="/testpage/result" element={<TestResult/>}/> 
    </Routes>
    </BrowserRouter>
    </Fragment>
    
    
  );
}

export default App;

