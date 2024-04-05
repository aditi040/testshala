import React from "react";
import { BiLogOut } from "react-icons/bi";
import { GiSpellBook } from "react-icons/gi";
import { IoHome, IoPersonCircleSharp } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";
import { Link } from "react-router-dom";
import "../Admin/AdminDashboard/AdminDashboard.css";
function UserDashboard() {
return (
<div className='bg-white sidebar p-2'>
<div className="m-2">
<i className='bi bi-bootstrap-fill me-3 fs-4'></i>
<GiSpellBook className="brand-name fs-4"/>TESTSHALA
</div>
<hr className="text-dark"/>
<div className='list-group list-group-flush'>
<Link to="/usermain" className="list-group-item list-group-itme-action py-2" activeclassName="active">
    <i className="bi bi-house fs-5 me-3"></i>
    <IoHome className="fs-5"/>Dashboard
    </Link>
    <Link to="/userprofile" className="list-group-item list-group-itme-action py-2" >
    <i className="bi bi-house fs-5 me-3"></i>
    <IoPersonCircleSharp className="fs-5"/>Profile
    </Link>
    {/* <Link to="/categories" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdCategory className="fs-5"/>Categories
    </Link> */}
    {/* <Link to="/addcategory" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdOutlineAddBox className="fs-5"/>Add Category
    </Link> */}
    <Link to="/userviewtestdetails" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdQuiz className="fs-5"/>Tests
    </Link>
    {/* <Link to="/addtest" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdAddToPhotos className="fs-5"/>Add Tests
    </Link> */}
    {/* <Link to="/addquestion" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <MdAddToPhotos className="fs-5"/>Add Question
    </Link> */}
    <Link to="/" className="list-group-item list-group-itme-action py-2">
    <i className="bi bi-house fs-5 me-3"></i>
    <BiLogOut className="fs-5"/>Logout
    </Link>
</div>
</div>
);
}
export default UserDashboard;



