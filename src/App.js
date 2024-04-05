import { Fragment } from "react";
import Helmet from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuestion from "./Admin/AdminDashboard/AddQuestion";
import AddQuestionForm from "./Admin/AdminDashboard/AddQuestionForm";
import Addtest from "./Admin/AdminDashboard/AddTest";
import Addtestdetails from "./Admin/AdminDashboard/Addtestdetails";
import EditQuestiondetails from "./Admin/AdminDashboard/EditQuestiondetails";
import Read from "./Admin/AdminDashboard/Read";
import Sidebar from "./Admin/AdminDashboard/Sidebar";
import Testdetails from "./Admin/AdminDashboard/Testdetails";
import UpdateTest from "./Admin/AdminDashboard/UpdateTest";
import ViewQuestiondetails from "./Admin/AdminDashboard/ViewQuestiondetails";
import Main from "./Admin/AdminDashboard/main";
import Main2 from "./Admin/AdminDashboard/profiledetails";
import UserDashboard from "./Student/UserDashboard";
import UserProfile from "./Student/UserProfile";
import UserViewTestdetails from "./Student/UserViewTestDetails";
import UserMain from "./Student/Usermain";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherMain from "./Teacher/TeacherMain";
import TestInstructions from "./components/Givetest/TestInstructions";
import { TestResult, TestResultProvider } from "./components/Givetest/TestResult";
import { APPWithRouter } from "./components/Givetest/Testpage";
import Testpage1 from "./components/Givetest/Testpage1";
import AboutUs from "./components/Navbar/AboutUs";
import ContactUs from "./components/Navbar/ContactUs";
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
    <Route path="/" element={<Navbar />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/admindashboard" element={<Main/>}/>
    <Route path="/profile" element={<Main2/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/addquestion" element={<AddQuestion/>}/>
    <Route path="/viewquestiondetails" element={<ViewQuestiondetails/>}/>
    <Route path="/addquestionform" element={<AddQuestionForm/>}/>
    <Route path="/addtest" element={<Addtestdetails/>}/>
    <Route path="/testdetails" element={<Testdetails/>}/>
    <Route path="/bar" element={<Bar/>}/>
    <Route path="/sidebar" element={<Sidebar/>}/>
    <Route path="/testpage" element={<APPWithRouter/>}/>
    <Route path="/testpage1" element={<Testpage1/>}/>
    <Route path="/testpage/result" element={<><TestResultProvider/>,<TestResult/></>}/>
    <Route path="/testinstructions" element={<TestInstructions/>}/>
    <Route path="/userdashboard" element={<UserDashboard/>}/>
    <Route path="/userprofile" element={<UserProfile/>}/>
    <Route path="/addtest" element={<Addtest/>}/>
    <Route path="/update" element={<UpdateTest/>}/>
    <Route path="/read" element={<Read/>}/>
    <Route path="/usermain" element={<UserMain/>}/>
    <Route path="/userviewtestdetails" element={<UserViewTestdetails/>}/>
    <Route path="/teacherdashboard" element={<TeacherDashboard/>}/>
    <Route path="/teachermain" element={<TeacherMain/>}/>
    <Route path="/edit" element={<EditQuestiondetails/>}/>

    </Routes>
    </BrowserRouter>
    </Fragment>
    
    
  );
}

export default App;

