import React from "react";
import { BiLogOut } from "react-icons/bi";
import { GiSpellBook } from "react-icons/gi";
import { IoHome, IoPersonCircleSharp } from "react-icons/io5";
import { MdAddToPhotos, MdCategory, MdOutlineAddBox, MdQuiz } from "react-icons/md";
import { Link } from "react-router-dom";
import '../Admin/AdminDashboard/AdminDashboard.css';
function TeacherDashboard() {
return (
<div className='bg-white sidebar p-2'>
<div className="m-2">
<i className='bi bi-bootstrap-fill me-3 fs-4'></i>
<GiSpellBook className="brand-name fs-4"/>TESTSHALA
</div>
<hr className="text-dark"/>
<div className='list-group list-group-flush'>
<Link to="/teachermain" className="list-group-item list-group-itme-action py-2" activeclassName="active">
    <i className="bi bi-house fs-5 me-3"></i>
    <IoHome className="fs-5"/>Dashboard
    </Link>
    <Link to="/profile" className="list-group-item list-group-itme-action py-2" >
    <i className="bi bi-house fs-5 me-3"></i>
    <IoPersonCircleSharp className="fs-5"/>Profile
    </Link>
    {/* <Link to="/categories" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdCategory className="fs-5"/>Categories
    </Link>
    <Link to="/addcategory" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdOutlineAddBox className="fs-5"/>Add Category
    </Link> */}
    <Link to="/testdetails" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdCategory className="fs-5"/>Tests
    </Link>
    <Link to="/addtest" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdOutlineAddBox className="fs-5"/>Add Tests
    </Link>
    <Link to="/questiondetails" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdQuiz className="fs-5"/>View Questions
    </Link>
    <Link to="/addquestion" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdAddToPhotos className="fs-5"/>Add Question
    </Link>
    <Link className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <BiLogOut className="fs-5"/>Logout
    </Link>
</div>
</div>
);
}
export default TeacherDashboard;



