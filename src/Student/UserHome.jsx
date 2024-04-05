import React from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Header from '../Admin/AdminDashboard/Header';
function UserHome({Toggle}) {
  return (
    <>
    <div className='px-3'>
      <Header Toggle={Toggle}/>
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
        <Link to="/userprofile">
        <div className='col-md-12'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 className='fs-2'></h3>
                    <p className='fs-5'>Profiles</p>
                </div>
                <i className='bi p-3 fs-1'><IoPersonSharp/></i>
            </div>
        </div>
        </Link>
        <Link to="/userviewtestdetails">
        <div className='col-md-12'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 className='fs-2'></h3>
                    <p className='fs-5'>Test Categories</p>
                    
                </div>
                <i className='bi p-3 fs-1'><BiSolidCategory/></i>
            </div>
        </div>
        </Link>
        </div>
        </div>
      </div>
    
    </>
  );
}

export default UserHome;
